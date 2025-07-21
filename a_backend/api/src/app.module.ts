import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from "@/modules/Teachers/module";
import { DatabaseModule } from "@/database/module";
import { ClassModule } from "@/modules/Classes/module";
import {StudentModule} from "@/modules/Students/module";

@Module({
  imports: [TeacherModule, DatabaseModule, ClassModule, TeacherModule, StudentModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
