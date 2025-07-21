import {ClassReqI, ClassResI} from "@/shares";

export interface BaseServiceI <RequestI, ResponseI> {
  find: (params?: any) => Promise<ResponseI[]>
  findOne: (id: number) => Promise<ResponseI>
  create: (data: RequestI) => Promise<ResponseI>
  updateOne: (id: number, data: RequestI) => Promise<ResponseI>
  softDelete: (id: number) => void
  // getPublicColumns: () => string[]
}

export interface ClassServiceI extends BaseServiceI<ClassReqI, any> {}