import { Profile } from '@/profile'
import { Interests } from '@/interests'
import { Username } from '@/username'
import { ApiClient } from './types'
import { generateUsername, interestsList } from './utils/generateUsername'

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
  };
  fetchUsername?: {
    result?: MockApiEndpointResult<Username>
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
    },
    username: {
      fetch: async (interests: string[]) => {
        invocations.push({ method: 'fetchUsername', args: [] })

        interests.sort();

        /*
          * This is where I would call out to a service that runs a SQL query like:
          *
          * SELECT username FROM users WHERE interest1 = interests[0] AND interest2 = interests[1] AND interest3 = interests[2];
          * 
          * and assign the result to existingUsernames.
          * 
          * This is based on the assumption that the interests are stored in alphabetical order
          * to columns named interest1, interest2, & interest3.
          * The point of this would be so that we only need to check against usernames of people who have the same interests
          * as opposed to checking against all usernames in the database.
        */
        const existingUsernames = ['EnergeticAbsurdSnap'];
        return generateUsername(interests, new Set<string>(existingUsernames));
      }
    }
  }
}
