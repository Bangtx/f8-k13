import {Column, PrimaryGeneratedColumn} from "typeorm";

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    default: () => "CURRENT_TIMESTAMP(6)"
  })
  createdAt: Date

  @Column({
    nullable: true
  })
  createdBy: number

  @Column({
    nullable: true
  })
  modifiedAt: Date

  @Column({
    nullable: true
  })
  modifiedBy: number

  @Column({
    nullable: true
  })
  deletedAt: Date

  @Column({
    nullable: true
  })
  deletedBy: number

  @Column({
    default: true
  })
  active: boolean
}