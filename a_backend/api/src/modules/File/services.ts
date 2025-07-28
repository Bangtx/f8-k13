import {BaseService} from "@/modules/Base/services";
import {FileEntity} from "@/modules/File/entities";
import {HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import {FileEntityRepository} from "@/shares";
import { Repository } from "typeorm";
import {FileI} from "@/shares/type/file";
import { writeFileSync } from 'fs';

@Injectable()
export class FileService extends BaseService<FileEntity> {
  constructor(
    @Inject(FileEntityRepository)
    protected repository: Repository<FileEntity>
  ) {
    super(repository);
  }

  upload(fileDto: FileI) {
    // todo: it should be handle in the dto
    if (!fileDto.payload.includes(';base64,')) {
      throw new HttpException('Wrong Format', HttpStatus.BAD_REQUEST);
    }
    const [info, payload] = fileDto.payload.split(';base64,')
    const [_, type] = info

    // store into the disk
    writeFileSync(`src/files/image.jpg`, payload, { encoding: 'base64' });
  }
}