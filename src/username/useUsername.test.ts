import { act, renderHook, waitFor } from '@testing-library/react-native'
import { makeMockApiClient } from '@/api'
import { makeUseUsernameHook } from './useUsername'

describe('useUsername', () => {
  it('loads username on mount', async () => {
    const username = ''

    const apiClient = makeMockApiClient({
      fetchUsername: {
        result: username
      }
    })
    const useUsername = makeUseUsernameHook({ apiClient })

    const { result, rerender } = renderHook(() => useUsername())

    await waitFor(() => {
      expect(apiClient.invocations()).toEqual([
        { method: 'fetchUsername', args: [] },
      ])
    })

    await waitFor(() => {
      expect(result.current.username).toEqual(username)
    })
  });

  it('has isLoaded of false and no username prior to username load', async () => {
    const username = ''

    let resolveFetchUsername = async () => {}

    const apiClient = makeMockApiClient({
      fetchUsername: {
        result: new Promise((resolve) => {
          resolveFetchUsername = async () => resolve(username)
        })
      }
    })
    const useUsername = makeUseUsernameHook({ apiClient })

    const { result, rerender } = renderHook(() => useUsername())

    await waitFor(() => {
      expect(result.current.username).toEqual(username)
    })

    await act(resolveFetchUsername)
  })
})