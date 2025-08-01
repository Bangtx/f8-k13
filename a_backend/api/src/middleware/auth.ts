import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {UserI, UserServiceI, UserServiceToken} from "@/shares";
import { ModuleRef } from '@nestjs/core';
import {UserModule} from '@/modules/Users/module';

@Injectable()
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
      UserServiceToken,
      undefined,
      {
        strict: false
      }
    )

    // should use findOne method
    const users = await userService.find({id: payload.id})
    if (users.length === 0) {
      throw new  HttpException('FORBIDDEN', HttpStatus.FORBIDDEN)
    }

    // make sure users only one emelent
    const user = users[0]
    req.headers.userId = user.id
    next()
  }
}