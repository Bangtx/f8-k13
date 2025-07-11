import {Column, Entity} from "typeorm";
import {BaseEntity} from "@/modules/base/entities";

@Entity('class')
export class ClassEntity extends BaseEntity {
  @Column({nullable: true})
  code: string

  @Column()
  name: string
}