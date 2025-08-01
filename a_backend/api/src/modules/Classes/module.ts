import { Module } from '@nestjs/common';
import { ClassController } from './controllers';
import { ClassService } from "./services";
import { DataSource } from 'typeorm';
import {ClassServiceToken, DATA_SOURCE, UserClassServiceToken} from "@/shares";
import { ClassEntity } from "@/modules/Classes/entities";
import {DatabaseModule} from "@/database/module";
import {UserClassModule} from "@/modules/UserClass/module";
import {TeacherModule} from "@/modules/Teachers/module";
import {StudentModule} from "@/modules/Students/module";
import {UserService} from "@/modules/Users/services";
import {UserClassService} from "@/modules/UserClass/services";

@Module({
  imports: [DatabaseModule, UserClassModule],
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
    },
    {
      provide: UserClassServiceToken,
      useClass: UserClassService
    }
  ],
})
export class ClassModule {}
