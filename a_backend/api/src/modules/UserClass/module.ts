import {DatabaseModule} from "@/database/module";
import {
  DATA_SOURCE,
  UserClassEntityRepository,
  UserClassServiceToken,
  UserEntityRepository,
  UserServiceToken
} from "@/shares";
import {UserService} from "@/modules/Users/services";
import { DataSource } from "typeorm";
import {UserClassEntity} from "@/modules/UserClass/entities";
import { Module } from "@nestjs/common";
import { UserClassService } from "@/modules/UserClass/services";

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    {
      provide: UserClassServiceToken,
      useClass: UserClassService
    },
    {
      provide: UserClassEntityRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(UserClassEntity),
      inject: [DATA_SOURCE]
    }
  ],
  exports: [UserClassEntityRepository, UserClassServiceToken]
})
export class UserClassModule {}