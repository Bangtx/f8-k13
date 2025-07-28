import {HttpException, HttpStatus} from "@nestjs/common";
import {UserI, UserServiceI, UserServiceToken} from "@/shares";
import { ModuleRef } from '@nestjs/core';
import {UserModule} from '@/modules/Users/module';

export class Auth {
  constructor(
    private moduleRef: ModuleRef
  ) {
  }

  async use(req, res, next) {

    let token = req.headers.authorization
    if (!token) {
      throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED)
    }

    token = token?.split(' ')[1]
    token = token?.split('.')[1]

    const payload = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'))

    const userService = await this.moduleRef.resolve<UserServiceI>(
      UserServiceToken
    )

    // todo: find current user
    const user = await userService.find({id: payload.id})

    console.log(user)
    next()
  }
}