export enum Role {
  ADMIN = 'admin',
  STUDENT = 'student',
  TEACHER = 'teacher'
}


export interface UserBaseI {
  name: string
  email?: string,
  // role: Role // admin / student / teacher
}

export interface UserI extends UserBaseI{
  id: number
}

export interface UserReqI extends UserBaseI {
  password: string
}

export interface UserResI extends UserI {}