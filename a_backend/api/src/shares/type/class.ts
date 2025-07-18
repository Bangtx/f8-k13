interface ClassBaseI {
  name: string
  code?: string
}

export interface ClassI extends ClassBaseI {
  id: number
}

// create or update
export interface ClassReqI extends ClassBaseI {}

// response
export interface ClassResI extends ClassI {}

