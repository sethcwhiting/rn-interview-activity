import { useEffect, useState } from 'react'
import { apiClient, ApiClient } from '@/api'
import { Interests } from './types'

type LoadedState = {
  interests: Interests;
  isLoaded: true;
};

type PreLoadedState = {
  interests: undefined;
  isLoaded: false;
};

type InterestsState = LoadedState | PreLoadedState;

export const makeUseInterestsHook =
  ({ apiClient }: { apiClient: ApiClient }) =>
    () => {
      const [state, setState] = useState<InterestsState>({
        interests: undefined,
        isLoaded: false
      })

      const refresh = async () => {
        setState({
          interests: await apiClient.interests.fetch(),
          isLoaded: true
        })
      }

      useEffect(() => {
        refresh()
      }, [])

      return state
    }

export const useInterests = makeUseInterestsHook({ apiClient })
