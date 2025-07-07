import { Module } from '@nestjs/common';
import { TeacherController } from './controllers';
import {TeacherService} from "./services";

@Module({
  imports: [],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
