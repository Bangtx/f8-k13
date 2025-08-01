import { DataSource } from 'typeorm';
import { DATA_SOURCE } from "@/shares";
import * as process from "node:process";
import { UserEntity } from "@/modules/Users/entities";
import { ClassEntity } from "@/modules/Classes/entities";
import {UserClassEntity} from "@/modules/UserClass/entities";
import {FileEntity} from "@/modules/File/entities";
import { initializeTransactionalContext, addTransactionalDataSource, StorageDriver } from 'typeorm-transactional';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [
          UserEntity,
          ClassEntity,
          UserClassEntity,
          FileEntity
        ],
        synchronize: true,
      });

      initializeTransactionalContext({ storageDriver: StorageDriver.ASYNC_LOCAL_STORAGE });
      addTransactionalDataSource(dataSource);

      return dataSource.initialize();
      // return addTransactionalDataSource(dataSource);
    },
  },
];