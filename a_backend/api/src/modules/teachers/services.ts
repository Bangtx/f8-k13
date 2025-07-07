import { Injectable } from '@nestjs/common';
import {TeacherReq} from "@/modules/teachers/dtos";
import {TeacherReqI, TeacherResI} from "@/shares";

@Injectable()
export class TeacherService {
  private teachers: any = []

  get() {
    return this.teachers
  }

  create(teacher: TeacherReqI) {
    this.teachers.push(teacher)
    return teacher
  }

  update(id, teacher: TeacherReqI) {
    return teacher
  }

  delete(id) {
    return {"msg": "deleted successfully"}
  }
}
