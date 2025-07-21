import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {StudentService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {StudentReq} from "./dtos";
import {StudentResI, StudentServiceToken} from "@/shares";

@ApiTags('Student')
@Controller('/students')
export class StudentController {
  // dependency injection
  constructor(
    @Inject(StudentServiceToken)
    private studentService: StudentService
  ) {}

  @Get()
  get() {
    return this.studentService.find()
  }

  @Post()
  create(@Body() student: StudentReq) {
    return this.studentService.create(student)
  }

  // @Put('/:id')
  // update(@Param('id') id: number, @Body() student: StudentReq) {
  //   return this.studentService.update(id, student)
  // }

  // @Delete('/:id')
  // delete(@Param('id') id: number) {
  //   return this.studentService.delete(id)
  // }
}