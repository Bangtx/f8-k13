import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from "./modules/teachers/module";
import { DatabaseModule } from "@/database/module";
import { ClassModule } from "@/modules/classes/module";

@Module({
  imports: [TeacherModule, DatabaseModule, ClassModule, TeacherModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
