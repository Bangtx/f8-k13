import {
  Body,
  Controller, Delete,
  Get, Inject, Param,
  Post, Put,
  Req,
  Headers
} from "@nestjs/common";
import {ClassService} from "./services";
import {ApiBearerAuth, ApiHeader, ApiTags} from "@nestjs/swagger";
import {ClassReq} from "./dtos";
import {ClassResI, ClassServiceI, ClassServiceToken} from "@/shares";
import {Transactional} from "typeorm-transactional";

@ApiBearerAuth()
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

  @Transactional()
  @Post()
  create(@Body() cls: ClassReq, @Headers() headers: Record < string, string >) {
    cls.userId = Number(headers.userId)
    return this.classService.create(cls)
  }

  @Put('/:id')
  @Transactional()
  update(@Param('id') id: number, @Body() cls: ClassReq) {
    return this.classService.updateOne(id, cls)
  }

  @Delete('/:id')
  @Transactional()
  delete(@Param('id') id: number) {
    return this.classService.softDelete(id)
  }
}
