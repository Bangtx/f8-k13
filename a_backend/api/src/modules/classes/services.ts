import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {DATA_SOURCE} from "@/shares";
import {ClassEntity} from "@/modules/classes/entities";
import {BaseService} from "@/modules/base/services";

@Injectable()
export class ClassService extends BaseService<ClassEntity> {

  constructor(
    // @Inject(DATA_SOURCE)
    // private dataSource: DataSource
    @Inject('ClassEntityRepository')
    protected repository: Repository<ClassEntity>
  ) {
    super(repository)
  }

  get() {
    return this.find()
  }
}