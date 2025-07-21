import {BaseService} from "@/modules/Base/services";
import {UserEntity} from "@/modules/Users/entities";
import {UserEntityRepository, UserServiceI, UserServiceToken} from "@/shares";
import {Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

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
}