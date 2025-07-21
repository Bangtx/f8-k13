import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
} from "@nestjs/common";
import {ClassService} from "./services";
import {ApiHeader, ApiTags } from "@nestjs/swagger";
import {ClassReq} from "./dtos";
import {ClassResI, ClassServiceI, ClassServiceToken} from "@/shares";

@ApiTags('Class')
@Controller('/classes')
export class ClassController {
  // dependency injection
  constructor(
    @Inject(ClassServiceToken)
    private classService: ClassService
  ) {}

  @Get()
  get() {
    return this.classService.find()
  }

  @Post()
  create(@Body() cls: ClassReq) {
    return this.classService.create(cls)
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() cls: ClassReq) {
    return this.classService.updateOne(id, cls)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.classService.softDelete(id)
  }
}
