import { Module } from '@nestjs/common';
import { TeacherController } from './controllers';
import {TeacherService} from "./services";
import { UserModule } from "@/modules/Users/module";
import {TeacherServiceToken} from "@/shares";

@Module({
  imports: [UserModule],
  controllers: [TeacherController],
  providers: [
    {
      provide: TeacherServiceToken,
      useClass: TeacherService
    }
  ],
  exports: [TeacherServiceToken]
})
export class TeacherModule {}
