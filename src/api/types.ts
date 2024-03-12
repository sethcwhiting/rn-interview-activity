import { Profile } from '@/profile'

export interface ApiClient {
  profile: {
    fetch(): Promise<Profile>
  }
}