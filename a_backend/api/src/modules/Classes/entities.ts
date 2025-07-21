import {Column, Entity} from "typeorm";
import {BaseEntity} from "@/modules/Base/entities";

@Entity('class')
export class ClassEntity extends BaseEntity {
  @Column({nullable: true})
  code: string

  @Column()
  name: string
}