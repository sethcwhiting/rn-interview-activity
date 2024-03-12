import { act, renderHook, waitFor } from '@testing-library/react-native'
import { makeMockApiClient } from '@/api'
import { makeUseProfileHook } from './useProfile'

describe('useProfile', () => {
  it('loads profile on mount', async () => {
    const profile = {
      name: 'Jane'
    }

    const apiClient = makeMockApiClient({
      fetchProfile: {
        result: profile
      }
    })
    const useProfile = makeUseProfileHook({ apiClient })

    const { result, rerender } = renderHook(() => useProfile())

    await waitFor(() => {
      expect(apiClient.invocations()).toEqual([
        { method: 'fetchProfile', args: [] },
      ])
    })

    await waitFor(() => {
      expect(result.current.isLoaded).toBeTruthy()
      expect(result.current.profile).toEqual(profile)
    })
  });

  it('has isLoaded of false and no profile prior to profile load', async () => {
    const profile = {
      name: 'Jane'
    }

    let resolveFetchProfile = async () => {}

    const apiClient = makeMockApiClient({
      fetchProfile: {
        result: new Promise((resolve) => {
          resolveFetchProfile = async () => {
            await act(() => {
              resolve(profile)
            })
          }
        })
      }
    })
    const useProfile = makeUseProfileHook({ apiClient })

    const { result, rerender } = renderHook(() => useProfile())

    await waitFor(() => {
      expect(result.current.isLoaded).toBeFalsy()
      expect(result.current.profile).toBeUndefined()
    })

    await resolveFetchProfile()
  })
})