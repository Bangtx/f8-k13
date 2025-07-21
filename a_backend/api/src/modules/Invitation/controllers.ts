import {Body, Controller, Inject, Post } from "@nestjs/common";
import {InvitationReq} from "@/modules/Invitation/dtos";
import {InvitationServiceI, InvitationServiceToken} from "@/shares";

@Controller('/invitation')
export class InvitationController {
  constructor(
    @Inject(InvitationServiceToken)
    private invitationService: InvitationServiceI
  ) {
  }

  @Post()
  invite(@Body() invitation: InvitationReq) {
    return this.invitationService.invite(invitation)
  }
}