import {Inject, Injectable } from "@nestjs/common";
import {InvitationServiceI, UserClassServiceToken, UserServiceToken} from "@/shares";
import {InvitationI} from "@/shares/type/invitation";
import {UserClassService} from "@/modules/UserClass/services";
import {UserService} from "@/modules/Users/services";

@Injectable()
export class InvitationService implements InvitationServiceI {

  constructor(
    @Inject(UserClassServiceToken)
    private userClassService: UserClassService,

    @Inject(UserServiceToken)
    private userService: UserService
  ) {}

  async invite(invitation: InvitationI) {
    // invitation.code === cls.code
    // create record in user_class table
    await this.userClassService.create(invitation)
    // valid: check userid, classId is valid
    // const user = await this.userService.find({id: invitation.userId})
  }
}