import {UserBaseI} from "@/shares";

interface TeacherBaseI extends UserBaseI {}

export interface TeacherI extends TeacherBaseI {
  id: number
}

export interface TeacherReqI extends TeacherBaseI {
  password: string
}

export interface TeacherResI extends TeacherI {}

// s [o] l [i] [d]