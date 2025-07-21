import {InvitationI} from "@/shares/type/invitation";
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class InvitationReq implements InvitationI {
  @ApiProperty({
    type: 'number'
  })
  @IsNumber()
  userId: number;
  @ApiProperty({
    type: 'number'
  })
  @IsNumber()
  classId: number;

  @ApiProperty({
    type: 'string'
  })
  @IsString()
  code: string;
}