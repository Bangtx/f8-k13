import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import { BaseEntity } from "@/modules/base/entities";


export class BaseService <Entity extends BaseEntity> {
  constructor(
    private repository: Repository<Entity>
  ) {
  }

  find() {

  }

  create(data) {
    // @ts-ignore
    const query: SelectQueryBuilder<Entity> = this.repository
      .createQueryBuilder()
      .insert()
      .values(data)

    query.execute()
  }

  updateOne(id, data) {
    const query = this.repository
      .createQueryBuilder("class")
      .update(data)
      .where(`class.id = ${id}`)
    console.log(query.getSql())
    query.execute()
  }

  updateMany() {

  }

  softDelete() {

  }
}