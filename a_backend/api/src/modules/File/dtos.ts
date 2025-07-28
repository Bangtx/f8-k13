import {FileI} from "@/shares/type/file";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber, IsOptional } from "class-validator";

export class FileDto implements FileI {
  @ApiProperty({
    type: 'string'
  })
  @IsOptional()
  @IsNumber()
  id?: number | undefined;

  @ApiProperty({
    type: 'string'
  })
  @IsString()
  payload: string;

  constructor() {
    console.log('vao day')
    console.log(this.payload)
  }
}
