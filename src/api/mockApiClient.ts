import { Profile } from '@/profile'
import { Interests } from '@/interests'
import { ApiClient } from './types'
import { interestsList } from './utils/generateUsername'

type MockApiClientInvocation = {
  method: string
  args: any[]
}

type MockApiEndpointResult<T> =
  | T
  | Promise<T>
  | (() => Promise<T>)

type MockApiSpecifications = {
  fetchProfile?: {
    result?: MockApiEndpointResult<Profile>
  };
  fetchInterests?: {
    result?: MockApiEndpointResult<Interests>
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

        const result = specifications.fetchProfile?.result

        return result ? result : { name: 'Sam' }
      }
    },
    interests: {
      fetch: async () => {
        invocations.push({ method: 'fetchInterests', args: [] })

        return interestsList;
      }
    }
  }
}
