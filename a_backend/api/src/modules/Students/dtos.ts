import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';
import {Role, StudentReqI, StudentResI} from '@/shares'

//payload / body
export class StudentReq implements StudentReqI {
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

  @ApiProperty({
    example: '12345678'
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  // @ApiProperty({
  //   example: '12345678',
  //   enum: ['admin', 'student', 'teacher']
  // })
  // @IsString()
  // @IsNotEmpty()
  // role: Role;

}
