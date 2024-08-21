import { Profile } from '@/profile'
import { Interests } from '@/interests'
import { Username } from '@/username'

export interface ApiClient {
  profile: {
    fetch(): Promise<Profile>
  },
  interests: {
    fetch(): Promise<Interests>
  },
  username: {
    fetch(arg: string[]): Promise<Username>
  }
}