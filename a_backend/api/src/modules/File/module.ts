import { Module } from "@nestjs/common";
import {DATA_SOURCE, FileEntityRepository, FileServiceToken, UserEntityRepository} from "@/shares";
import {FileService} from "@/modules/File/services";
import { DataSource } from "typeorm";
import {FileEntity} from "@/modules/File/entities";
import {DatabaseModule} from "@/database/module";
import {FileController} from "@/modules/File/controllers";

@Module({
  imports: [DatabaseModule],
  controllers: [FileController],
  providers: [
    {
      provide: FileServiceToken,
      useClass: FileService,
    },
    {
      provide: FileEntityRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(FileEntity),
      inject: [DATA_SOURCE]
    },
  ]
})
export class FileModule {}