import { Profile } from '@/profile'
import { ApiClient } from './types'

type MockApiClientInvocation = {
  method: string
  args: any[]
}

type MockApiEndpointResult<T> =
  | T
  | Promise<T>

type MockApiSpecifications = {
  fetchProfile?: {
    result?: MockApiEndpointResult<Profile>
  }
}

type MockApiClient = ApiClient & { invocations():  MockApiClientInvocation[] }

export const makeMockApiClient = (
  specifications: MockApiSpecifications = {}
): MockApiClient => {
  const invocations: MockApiClientInvocation[] = []

  return {
    invocations: () => invocations,
    profile: {
      fetch: async () => {
        invocations.push({ method: 'fetchProfile', args: [] })

        return specifications.fetchProfile?.result || { name: 'Paul' }
      }
    }
  }
}
