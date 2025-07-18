import { Module } from '@nestjs/common';
import { ClassController } from './controllers';
import { ClassService } from "./services";
import { DataSource } from 'typeorm';
import { DATA_SOURCE } from "@/shares";
import { ClassEntity } from "@/modules/classes/entities";
import {DatabaseModule} from "@/database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [ClassController],
  providers: [
    {
      provide: 'ClassEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ClassEntity),
      inject: [DATA_SOURCE]
    },
    ClassService
  ],
})
export class ClassModule {}
