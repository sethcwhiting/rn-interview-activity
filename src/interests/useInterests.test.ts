import { act, renderHook, waitFor } from '@testing-library/react-native'
import { makeMockApiClient } from '@/api'
import { makeUseInterestsHook } from './useInterests'
import { interestsList } from '@/api/utils/generateUsername';

describe('useInterests', () => {
  it('loads interests on mount', async () => {
    const apiClient = makeMockApiClient()
    const useInterests = makeUseInterestsHook({ apiClient })

    const { result } = renderHook(() => useInterests())

    await waitFor(() => {
      expect(apiClient.invocations()).toEqual([
        { method: 'fetchInterests', args: [] },
      ])
    })

    await waitFor(() => {
      expect(result.current.isLoaded).toBeTruthy()
      expect(result.current.interests).toEqual(interestsList)
    })
  });

  it('has isLoaded of false and no interests prior to interests load', async () => {
    const interests = interestsList;

    let resolveFetchInterests = async () => {}

    const apiClient = makeMockApiClient({
      fetchInterests: {
        result: new Promise((resolve) => {
          resolveFetchInterests = async () => resolve(interests)
        })
      }
    })
    const useInterests = makeUseInterestsHook({ apiClient })

    const { result, rerender } = renderHook(() => useInterests())

    await waitFor(() => {
      expect(result.current.isLoaded).toBeFalsy()
      expect(result.current.interests).toBeUndefined()
    })

    await act(resolveFetchInterests)
  })

})