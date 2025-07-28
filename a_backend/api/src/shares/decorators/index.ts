import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export function ApiIntField(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({type: 'number', example: 1}),
    IsNumber(),
    IsNotEmpty()
  )
}

export function ApiIntFieldNullable() {
  return applyDecorators(
    ApiProperty({type: 'number', example: 1, nullable: true}),
    IsNumber(),
  )
}

export function ApiStrField(): PropertyDecorator {
  return applyDecorators(
    ApiProperty({type: 'string', example: 'string'}),
    IsString(),
    IsNotEmpty()
  )
}

export function ApiStrFieldNullable() {
  return applyDecorators(
    ApiProperty({type: 'string', example: 'string', nullable: true}),
    IsString(),
  )
}