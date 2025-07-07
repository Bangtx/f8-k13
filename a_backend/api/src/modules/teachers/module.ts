import { Module } from '@nestjs/common';
import { TeacherController } from './controller';

@Module({
  imports: [],
  controllers: [TeacherController],
  providers: [],
})
export class TeacherModule {}
