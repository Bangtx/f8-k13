import {BaseService} from "@/modules/Base/services";
import {UserEntity} from "@/modules/Users/entities";
import {LoginResI, UserEntityRepository, UserI, UserServiceI, UserServiceToken} from "@/shares";
import {Inject, Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { Repository } from "typeorm";
import {LoginReq} from "@/modules/Auth/dtos";
import {sign} from 'jsonwebtoken'

const privateKey = process.env.PRIVATE_KEY

@Injectable()
export class UserService extends BaseService<UserEntity> implements UserServiceI {
  constructor(
    @Inject(UserEntityRepository)
    protected repository: Repository<UserEntity>
  ) {
    super(repository);
  }

  protected getPublicColumns(): any {
    return super.getPublicColumns().filter(c => c != 'password');
  }

  async login(loginReq: LoginReq): Promise<LoginResI> {
    // check email and password is correct?
    const users: UserI[] = await this.find({email: loginReq.email, password: loginReq.password})
    // if incorrect -> 404
    if (users.length === 0) {
      throw new HttpException('wrong email or password', HttpStatus.NOT_FOUND)
    }

    // make sure user only contain 1 element
    const user: UserI = users[0]

    // make new jwt token and return
    const token = sign({
      ...user,
      // exp: Math.floor(Date.now() / 1000) + 600
    }, privateKey);

    return {
      accessToken: token,
      refreshToken: sign(user, privateKey)
    }
  }
}