import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {TeacherService} from "./services";
import {ApiBearerAuth, ApiHeader, ApiTags } from "@nestjs/swagger";
import {TeacherReq} from "./dtos";
import {TeacherResI, TeacherServiceToken} from "@/shares";

@ApiBearerAuth()
@ApiTags('Teacher')
@Controller('/teachers')
export class TeacherController {
  // dependency injection
  constructor(
    @Inject(TeacherServiceToken)
    private teacherService: TeacherService
  ) {}

  @Get()
  get() {
    return this.teacherService.find({name: 'test 2'})
  }

  @Post()
  create(@Body() teacher: TeacherReq) {
    return this.teacherService.create(teacher)
  }

  // @Put('/:id')
  // update(@Param('id') id: number, @Body() teacher: TeacherReq) {
  //   return this.teacherService.update(id, teacher)
  // }

  // @Delete('/:id')
  // delete(@Param('id') id: number) {
  //   return this.teacherService.delete(id)
  // }
}