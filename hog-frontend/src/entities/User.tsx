import {Link} from "./Link";
import {Page} from "./Page";

export interface UserEntity {
  userId: number,
  activated: boolean,
  email: string,
  password: string,
  firstname: string,
  lastname: string,
  userRole: number,
  usesMd5: boolean
}

export interface User {
  entity: UserEntity,
  fullname: string,
  _links?: {[key: string]: Link}
}

export interface UserCollection {
  _embedded: { userModelList: User[]},
  _links?: {[key: string]: Link}
  page?: Page
}

export interface UpdateNameRequest {
  userId: number,
  firstname: string,
  lastname: string
}

export interface UpdatePasswordRequest {
  userId: number,
  oldPassword: string,
  newPassword: string
}
