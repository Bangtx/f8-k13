import {InvitationServiceToken} from "@/shares";
import {InvitationService} from "@/modules/Invitation/services";
import {InvitationController} from "@/modules/Invitation/controllers";
import { Module } from "@nestjs/common";
import {UserClassModule} from "@/modules/UserClass/module";
import {UserModule} from "@/modules/Users/module";
import {ClassModule} from "@/modules/Classes/module";
import {UserClassService} from "@/modules/UserClass/services";

@Module({
  imports: [UserClassModule, UserModule, ClassModule],
  controllers: [InvitationController],
  providers: [
    {
      provide: InvitationServiceToken,
      useClass: InvitationService
    }
  ]
})
export class InvitationModule {}