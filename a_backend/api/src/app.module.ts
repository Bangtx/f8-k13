import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from "./modules/teachers/module";

@Module({
  imports: [TeacherModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
