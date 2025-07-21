import { Module } from '@nestjs/common';
import { StudentController } from './controllers';
import {StudentService} from "./services";
import { UserModule } from "@/modules/Users/module";
import {StudentServiceToken} from "@/shares";

@Module({
  imports: [UserModule],
  controllers: [StudentController],
  providers: [
    {
      provide: StudentServiceToken,
      useClass: StudentService
    }
  ]
})
export class StudentModule {}
