import {Module} from "@nestjs/common";
import {MailController} from "@/modules/MailSender/controllers";

@Module({
  controllers: [MailController]
})
export class MailModule {}