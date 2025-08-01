import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from "@/modules/Teachers/module";
import { DatabaseModule } from "@/database/module";
import { ClassModule } from "@/modules/Classes/module";
import {StudentModule} from "@/modules/Students/module";
import {InvitationModule} from "@/modules/Invitation/module";
import {FileModule} from "@/modules/File/module";
import {AuthModule} from "@/modules/Auth/module";
import {Auth} from "@/middleware";

@Module({
  imports: [TeacherModule, DatabaseModule, ClassModule, TeacherModule, StudentModule, InvitationModule, FileModule, AuthModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(Auth)
      .exclude({
        path: 'login', method: RequestMethod.POST
      })
      .forRoutes('*')
  }
}
