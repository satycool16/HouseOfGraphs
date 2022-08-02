export interface SignupRequest {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  recaptcha_response: string
}

export interface LoginRequest {
  email: string,
  password: string
}

export enum Authorities {
  "computer",
  "regular",
  "admin"
}

export interface LoggedinUser {
  userId: number,
  authorities: [{authority: Authorities}]
}

export interface PasswordResetRequest {
  email: string,
  password: string,
  token: string
}

export interface DeleteAccountRequest {
  userId: number,
  password: string
}