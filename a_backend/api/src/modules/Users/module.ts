import { Module } from '@nestjs/common';
import { UserService } from "./services";
import {DATA_SOURCE, UserEntityRepository, UserServiceToken} from "@/shares";
import { DataSource } from 'typeorm';
import { UserEntity } from "@/modules/Users/entities";
import {DatabaseModule} from "@/database/module";

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    {
      provide: UserEntityRepository,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(UserEntity),
      inject: [DATA_SOURCE]
    },
    {
      provide: UserServiceToken,
      useClass: UserService
    }
  ],
  exports: [UserEntityRepository]
})
export class UserModule {}
