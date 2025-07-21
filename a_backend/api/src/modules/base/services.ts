import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import { BaseEntity } from "@/modules/base/entities";
import {BaseServiceI} from "@/shares";


export abstract class BaseService <Entity extends BaseEntity> implements BaseServiceI<any, any>{
  constructor(
    protected repository: Repository<Entity>
  ) {
  }

  protected getPublicColumns() {
    const privateColumns = ['createdAt', 'createdBy', 'modifiedAt', 'modifiedBy', 'deletedAt', 'deletedBy', 'active']
    const columns = this.repository.metadata.columns.map((column) => column.propertyName)
    return columns.filter(col => !privateColumns.includes(col))
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
      .returning(this.getPublicColumns())

    const response = await query.execute()
    return response.raw
  }

  async updateOne(id, data) {
    const query = this.repository
      .createQueryBuilder("class")
      .update(data)
      .where('id = :id', {id})
      .returning(this.getPublicColumns())

    const response = await query.execute()

    return response.raw
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

    return {'msg': 'deleted successflly'}
  }
}