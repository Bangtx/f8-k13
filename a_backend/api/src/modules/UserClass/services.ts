import {BaseService} from "@/modules/Base/services";
import {UserClassEntity} from "@/modules/UserClass/entities";
import {Inject, Injectable } from "@nestjs/common";
import {UserClassEntityRepository} from "@/shares";
import { Repository } from "typeorm";

@Injectable()
export class UserClassService extends BaseService<UserClassEntity> {
  constructor(
    @Inject(UserClassEntityRepository)
    protected repository: Repository<UserClassEntity>
  ) {
    super(repository);
  }
}