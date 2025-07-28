import {InvitationI} from "@/shares/type/invitation";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import {ApiIntField, ApiStrField} from "@/shares/decorators";

export class InvitationReq implements InvitationI {
  @ApiIntField()
  userId: number

  @ApiIntField()
  classId: number;

  @ApiStrField()
  code: string;
}