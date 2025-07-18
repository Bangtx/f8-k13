import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {DATA_SOURCE} from "@/shares";
import {ClassEntity} from "@/modules/classes/entities";

@Injectable()
export class ClassService {

  constructor(
    // @Inject(DATA_SOURCE)
    // private dataSource: DataSource
    @Inject('ClassEntityRepository')
    private repository: Repository<ClassEntity>
  ) {
    // this.repository = this.dataSource.getRepository(ClassEntity)
  }

  get() {
    // return this.repository.find({
    //   where: [{
    //     id: 1
    //   }, {
    //     id: 34
    //   }]
    // })
    const query: SelectQueryBuilder<ClassEntity> = this.repository
      .createQueryBuilder('class')
      .select(['id', 'name'])
      .where("class.active")
      .orderBy({
        'class.id': 'DESC',
        'class.name': 'ASC'
      })
    console.log(query.getSql())

    return query.execute()
  }

  create(cls) {
    const query = this.repository
      .createQueryBuilder()
      .insert()
      .values(cls)
    console.log(query.getSql())
    query.execute()
    // const classEntity = new ClassEntity()
    // classEntity.code = cls.code
    // classEntity.name = cls.name
    //
    // this.repository.save(classEntity)
  }

  async update(id, cls) {
    // const classEntity = await this.repository.findOneBy({
    //   id: id
    // })
    //
    // if (!classEntity) return
    //
    // classEntity.code = cls.code
    // classEntity.name = cls.name
    //
    // this.repository.save(classEntity)
    const query = this.repository
      .createQueryBuilder("class")
      .update(cls)
      .where(`class.id = ${id}`)
    console.log(query.getSql())
    query.execute()
  }

  async softDelete(id: number) {
    const classEntity = await this.repository.findOneBy({
      id: id
    })

    if (!classEntity) return

    classEntity.active = false
    classEntity.deletedAt = new Date()

    this.repository.save(classEntity)
  }
}