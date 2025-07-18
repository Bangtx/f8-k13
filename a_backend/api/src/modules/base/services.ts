import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import { BaseEntity } from "@/modules/base/entities";
import {BaseServiceI} from "@/shares";


export class BaseService <Entity extends BaseEntity> implements BaseServiceI<any, any>{
  constructor(
    protected repository: Repository<Entity>
  ) {
  }

  findOne: (id: number) => Promise<any>;

  protected getTableName() {
    return this.repository.metadata.name
  }

  protected handleSelect() {
    const query: SelectQueryBuilder<Entity> = this.repository
      .createQueryBuilder(this.getTableName())
      .select()
    return query
  }

  protected handleFind(query, condition) {
    return query.where({...condition})
  }

  async find() {
    let query = this.handleSelect()
    query = this.handleFind(query, {active: true})
    return query.execute()
  }

  async create(data) {
    // @ts-ignore
    const query: SelectQueryBuilder<Entity> = this.repository
      .createQueryBuilder()
      .insert()
      .values(data)

    query.execute()
  }

  async updateOne(id, data) {
    const query = this.repository
      .createQueryBuilder("class")
      .update(data)
      .where('id = :id', {id})

    query.execute()
  }

  updateMany() {

  }

  async softDelete(id) {
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