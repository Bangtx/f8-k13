import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';
import {TeacherReqI, TeacherResI} from '@/shares'

//payload / body
export class TeacherReq implements TeacherReqI {
  @ApiProperty({
    example: 'test name'
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({
    example: 'user@gmail.com',
    nullable: true,
    required: false
  })
  @IsString()
  email?: string
}
