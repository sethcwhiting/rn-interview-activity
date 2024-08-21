import { useEffect, useState } from 'react'
import { apiClient, ApiClient } from '@/api'
import { Username } from './types'

export const makeUseUsernameHook =
  ({ apiClient }: { apiClient: ApiClient }) =>
    () => {
      const [username, setUsername] = useState<Username>('');

      const refresh = async (interests: string[] = []) => {
        setUsername(await apiClient.username.fetch(interests));
      }

      useEffect(() => {
        refresh()
      }, [])

      return { username, refresh };
    }

export const useUsername = makeUseUsernameHook({ apiClient })
