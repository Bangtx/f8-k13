import { Injectable } from '@nestjs/common';
import {StudentReq} from "@/modules/Students/dtos";
import {StudentReqI, StudentResI} from "@/shares";
import {UserService} from "@/modules/Users/services";

@Injectable()
export class StudentService extends UserService {

  protected handleFind(query, condition): any {
    query = super.handleFind(query, {...condition, role: 'student'});
    return query
  }

  async create(data: StudentReqI): Promise<any> {
    return super.create({...data, role: 'student'});
  }
}
