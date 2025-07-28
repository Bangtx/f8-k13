import {Body, Controller, Get, HttpException, HttpStatus, Inject, Post, Query, StreamableFile } from "@nestjs/common";
import { createReadStream } from 'fs';
import { join } from 'path';
import {FileDto} from "@/modules/File/dtos";
import {FileServiceToken} from "@/shares";
import {FileService} from "@/modules/File/services";

@Controller('files')
export class FileController {

  constructor(
    @Inject(FileServiceToken)
    private fileService: FileService
  ) {
  }

  @Get()
  read(@Query('path') path: string) {
    const file = createReadStream(join(process.cwd(), path));
    return new StreamableFile(file, {
      type: 'image/jpg',
    });
  }

  @Post()
  upload(@Body() fileDto: FileDto) {
    return this.fileService.upload(fileDto)
  }
}