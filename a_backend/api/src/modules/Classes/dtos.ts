import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';
import { ClassReqI } from '@/shares'

// payload / body
export class ClassReq implements ClassReqI {
  @ApiProperty({
    example: 'test name'
  })
  @IsString()
  @IsNotEmpty()
  name: string

  @ApiProperty({
    example: '12345',
    nullable: true,
    required: false
  })
  @IsString()
  code: string

  userId: number
}
