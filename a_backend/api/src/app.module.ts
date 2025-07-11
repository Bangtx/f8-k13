import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from "./modules/teachers/module";
import { DatabaseModule } from "@/database/module";

@Module({
  imports: [TeacherModule, DatabaseModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
