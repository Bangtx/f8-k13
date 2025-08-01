import {Inject, Injectable } from "@nestjs/common";
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';
import {
  ClassReqI,
  ClassResI,
  ClassServiceI,
  ClassServiceToken,
  DATA_SOURCE, StudentServiceToken,
  TeacherServiceToken,
  UserClassServiceToken
} from "@/shares";
import {ClassEntity} from "@/modules/Classes/entities";
import {BaseService} from "@/modules/Base/services";
import {UserClassEntity} from "@/modules/UserClass/entities";
import {UserEntity} from "@/modules/Users/entities";
import {UserClassService} from "@/modules/UserClass/services";
import {TeacherService} from "@/modules/Teachers/services";
import {StudentService} from "@/modules/Students/services";
import {ClassReq} from "@/modules/Classes/dtos";

@Injectable()
export class ClassService extends BaseService<ClassEntity> implements ClassServiceI {

  constructor(
    // @Inject(DATA_SOURCE)
    // private dataSource: DataSource
    @Inject('ClassEntityRepository')
    protected repository: Repository<ClassEntity>,

    @Inject(UserClassServiceToken)
    private userClassService: UserClassService,
    //
    // @Inject(TeacherServiceToken)
    // private teacherService: TeacherService,
    //
    // @Inject(StudentServiceToken)
    // private studentService: StudentService
  ) {
    super(repository)
  }

  protected handleSelect() {
    return this.repository
      .createQueryBuilder('class')
      .select([
        'class.id as id',
        'class.code as code',
        'class.name as name',
        `
          coalesce(
            json_agg(
              json_build_object(
                'id', "user".id,
                'name', "user".name,
                'role', "user".role
              )
            ) filter ( where  "user".role = 'teacher')
          ) as "teachers",

          coalesce(
            json_agg(
              json_build_object(
                'id', "user".id,
                'name', "user".name,
                'role', "user".role
              )
            ) filter ( where  "user".role = 'student')
           ) as "students"
        `
      ])
      .innerJoin(UserClassEntity, 'user_class', 'user_class."classId" = class.id and user_class.active')
      .innerJoin(UserEntity, 'user', '"user"."id" = user_class.userId and user.active')
      .groupBy("class.id, class.code, class.name")
  }

  // protected handleFind(query, condition): any {
  //   query = super.handleFind(query, condition);
  //   query.andWhere("user_class.active")
  //   return query
  // }

  async getClasses() {
    // let query = this.repository
    //   .createQueryBuilder('class')
    //   .select([
    //     'class.id as id',
    //     'class.code as code',
    //     'class.name as name'
    //   ])
    // query = await this.handleFind(query, {active: true})
    // return query.execute()
    return this.repository.find({
      select: ['id', 'code', 'name'],
      where: {active: true}
    })
    // const classes = await this.find()
    // const userClasses = await this.userClassService.find({
    //   classIds:
    // })
    // const teachers = await this.teacherService.find()
    // const students = await this.studentService.find()
  }

  async create(cls: ClassReqI) {
    const newCls = await super.create(cls)

    // create new record into user_class table
    await this.userClassService.create({
      classId: newCls.id,
      userId: cls.userId
    })
    return newCls
  }
}