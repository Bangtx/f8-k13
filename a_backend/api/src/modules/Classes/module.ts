import { Module } from '@nestjs/common';
import { ClassController } from './controllers';
import { ClassService } from "./services";
import { DataSource } from 'typeorm';
import {ClassServiceToken, DATA_SOURCE} from "@/shares";
import { ClassEntity } from "@/modules/Classes/entities";
import {DatabaseModule} from "@/database/module";
import {UserClassModule} from "@/modules/UserClass/module";
import {TeacherModule} from "@/modules/Teachers/module";
import {StudentModule} from "@/modules/Students/module";

@Module({
  imports: [DatabaseModule],
  controllers: [ClassController],
  providers: [
    {
      provide: 'ClassEntityRepository',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(ClassEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: ClassServiceToken,
      useClass: ClassService
    }
  ],
})
export class ClassModule {}
