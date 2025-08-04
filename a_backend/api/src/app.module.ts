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
import { ConfigModule } from '@nestjs/config';
import configuration from "@/config/configuration";
import {MailModule} from "@/modules/MailSender/module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TeacherModule,
    DatabaseModule,
    ClassModule,
    TeacherModule,
    StudentModule,
    InvitationModule,
    FileModule,
    AuthModule,
    MailModule
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(Auth)
      .exclude({
        path: 'login', method: RequestMethod.POST,
      })
      .exclude({
        path: 'files', method: RequestMethod.ALL
      })
      .exclude({
        path: 'send_mail', method: RequestMethod.ALL
      })
      .forRoutes('*')
  }
}
