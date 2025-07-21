import { Injectable } from '@nestjs/common';
import {TeacherReq} from "@/modules/Teachers/dtos";
import {TeacherReqI, TeacherResI} from "@/shares";
import {UserService} from "@/modules/Users/services";

@Injectable()
export class TeacherService extends UserService {

  protected handleFind(query, condition): any {
    query = super.handleFind(query, {...condition, role: 'teacher'});
    return query
  }

  async create(data: TeacherReqI): Promise<any> {
    return super.create({...data, role: 'teacher'});
  }
}
