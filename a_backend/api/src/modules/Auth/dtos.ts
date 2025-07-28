import {ApiStrField} from "@/shares/decorators";

export class LoginReq {
  @ApiStrField()
  email: string

  @ApiStrField()
  password: string
}