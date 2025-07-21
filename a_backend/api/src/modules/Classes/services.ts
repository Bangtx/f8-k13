import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ClassResI, ClassServiceI, DATA_SOURCE} from "@/shares";
import {ClassEntity} from "@/modules/Classes/entities";
import {BaseService} from "@/modules/Base/services";
import {UserClassEntity} from "@/modules/UserClass/entities";
import {UserEntity} from "@/modules/Users/entities";

@Injectable()
export class ClassService extends BaseService<ClassEntity> implements ClassServiceI {

  constructor(
    // @Inject(DATA_SOURCE)
    // private dataSource: DataSource
    @Inject('ClassEntityRepository')
    protected repository: Repository<ClassEntity>
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
      .createQueryBuilder('class')
      .select([
        'class.id as id',
        'class.code as code',
        'class.name as name',
        `
          json_agg(
            json_build_object(
              'id', "user".id,
              'name', "user".name
            )
          ) as users
        `
      ])
      .innerJoin(UserClassEntity, 'user_class', 'user_class."classId" = class.id')
      .innerJoin(UserEntity, 'user', '"user"."id" = user_class.userId')
      .groupBy("class.id, class.code, class.name")
  }
}