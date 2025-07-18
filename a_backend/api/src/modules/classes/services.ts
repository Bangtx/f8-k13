import {Inject, Injectable } from "@nestjs/common";
import { DataSource } from 'typeorm';
import {DATA_SOURCE} from "@/shares";
import {ClassEntity} from "@/modules/classes/entities";

@Injectable()
export class ClassService {
  constructor(
    @Inject(DATA_SOURCE)
    private dataSource: DataSource
  ) {}

  create(cls) {
    const classEntity = new ClassEntity()
    classEntity.code = cls.code
    classEntity.name = cls.name

    this.dataSource.manager.save(classEntity)
  }
}