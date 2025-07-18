import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import { BaseEntity } from "@/modules/base/entities";


export class BaseService <Entity extends BaseEntity> {
  constructor(
    protected repository: Repository<Entity>
  ) {
  }

  private getTableName() {
    return this.repository.metadata.name
  }

  find() {
    const query: SelectQueryBuilder<Entity> = this.repository
      .createQueryBuilder(this.getTableName())
      .select()
      .where(`${this.getTableName()}.active`)
      // .orderBy(
      //   `${this.getTableName()}.id`
      // )

    return query.execute()
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

  softDelete(id) {
    const query = this.repository
      .createQueryBuilder("class")
      .update({
        active: false,
        deletedAt: new Date()
      } as any)
      .where(`class.id = ${id}`)

    query.execute()
  }
}