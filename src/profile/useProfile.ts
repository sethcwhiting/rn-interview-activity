import { useEffect, useState } from 'react'
import { ApiClient } from '@/api'
import { Profile } from './types'

export const makeUseProfileHook =
  ({ apiClient }: { apiClient: ApiClient }) =>
    () => {
      const [state, setState] = useState<{
        profile: Profile | undefined,
        isLoaded: boolean
      }>({
        profile: undefined,
        isLoaded: false
      })

      const refresh = async () => {
        setState({
          profile: await apiClient.profile.fetch(),
          isLoaded: true
        })
      }

      useEffect(() => {
        refresh()
      }, [])

      return state
    }