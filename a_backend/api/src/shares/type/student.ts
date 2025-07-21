import {UserBaseI} from "@/shares";

interface StudentBaseI extends UserBaseI {}

export interface StudentI extends StudentBaseI {
  id: number
}

export interface StudentReqI extends StudentBaseI {
  password: string
}

export interface StudentResI extends StudentI {}

// s [o] l [i] [d]