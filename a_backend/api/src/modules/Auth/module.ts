import { Module } from "@nestjs/common";
import {AuthController} from "@/modules/Auth/controllers";
import {UserModule} from "@/modules/Users/module";

@Module({
  imports: [UserModule],
  controllers: [AuthController]
})
export class AuthModule {}