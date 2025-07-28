import {Body, Controller, Inject, Post } from "@nestjs/common";
import {UserServiceI, UserServiceToken} from "@/shares";
import {LoginReq} from "@/modules/Auth/dtos";

@Controller()
export class AuthController {
  constructor(
    @Inject(UserServiceToken)
    private userService: UserServiceI
  ) {}

  @Post('/login')
  login(@Body() loginReq: LoginReq) {
    return this.userService.login(loginReq)
  }
}