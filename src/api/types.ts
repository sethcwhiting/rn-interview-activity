import { Profile } from '@/profile'
import { Interests } from '@/interests'

export interface ApiClient {
  profile: {
    fetch(): Promise<Profile>
  },
  interests: {
    fetch(): Promise<Interests>
  }
}