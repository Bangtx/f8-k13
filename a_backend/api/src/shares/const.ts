import {TeacherService} from "@/modules/Teachers/services";
import {UserClassService} from "@/modules/UserClass/services";

export const DATA_SOURCE = Symbol('DATA_SOURCE')
export const ClassServiceToken = Symbol('ClassServiceI')

export const UserEntityRepository = Symbol('UserEntityRepository')
export const UserServiceToken = Symbol('UserServiceI')


export const TeacherServiceToken = Symbol('TeacherServiceI')
export const StudentServiceToken = Symbol('StudentServiceI')

export const UserClassEntityRepository = Symbol('UserClassEntityRepository')
export const UserClassServiceToken = Symbol('UserClassServiceI')

export const InvitationServiceToken = Symbol('InvitationServiceToken')

export const FileServiceToken = Symbol('FileServiceToken')
export const FileEntityRepository = Symbol('FileEntityRepository')