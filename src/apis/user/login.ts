import service from '@/apis/client/service'

export interface User {
  id: number
  username: string
  email: string
  create_time: string
}

export interface UserRequest {
  username: string
  email: string
  password: string
}

export interface UserResponse {
  token: string
}

export const fetchUsers = (req: UserRequest) => {
  return service.post<UserResponse>('/api/login', req, { silent: false })
}


