import {BaseEntity} from "@/modules/Base/entities";
import {Column, Entity } from "typeorm";

@Entity('user_class')
export class UserClassEntity extends BaseEntity {
  @Column()
  userId: number

  @Column()
  classId: number
}