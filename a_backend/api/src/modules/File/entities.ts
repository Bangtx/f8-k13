import {BaseEntity} from "@/modules/Base/entities";
import { Column, Entity } from "typeorm";

@Entity('files')
export class FileEntity extends BaseEntity {
  @Column()
  path: string

  // image/png image/jpg application/pdf
  @Column()
  type: string
}