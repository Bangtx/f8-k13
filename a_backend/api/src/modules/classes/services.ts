import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {ClassResI, ClassServiceI, DATA_SOURCE} from "@/shares";
import {ClassEntity} from "@/modules/classes/entities";
import {BaseService} from "@/modules/base/services";

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
      .select(this.getPublicColumns())
  }
}