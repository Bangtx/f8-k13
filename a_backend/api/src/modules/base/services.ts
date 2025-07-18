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
      .where('active')

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
      .where('id = :id', {id})

    query.execute()
  }

  updateMany() {

  }

  softDelete(id) {
    const query = this.repository
      .createQueryBuilder(this.getTableName())
      .update({
        active: false,
        deletedAt: new Date()
      } as any)
      .where('id = :id', {id})

    query.execute()
  }
}