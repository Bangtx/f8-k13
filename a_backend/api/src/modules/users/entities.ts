import {Column, Entity} from "typeorm";
import {BaseEntity} from "@/modules/base/entities";

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column()
  email: string

  @Column()
  name: string

  @Column()
  password: string

  @Column()
  role: string
}