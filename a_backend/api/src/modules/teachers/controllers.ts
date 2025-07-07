import {
  Body,
  Controller, Delete,
  Get, Param,
  Post, Put,
} from "@nestjs/common";
import {TeacherService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {TeacherReq} from "./dtos";
import {TeacherResI} from "@/shares";

@ApiTags('Teacher')
@Controller('/teachers')
export class TeacherController {
  // dependency injection
  constructor(private teacherService: TeacherService) {}

  @Get()
  get() {
    return this.teacherService.get()
  }

  @Post()
  create(@Body() teacher: TeacherReq) {
    console.log(teacher)
    return this.teacherService.create(teacher)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() teacher: TeacherReq) {
    return this.teacherService.update(id, teacher)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.teacherService.delete(id)
  }
}