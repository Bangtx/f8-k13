import {Controller, Post} from "@nestjs/common";
import {GmailServer} from "@/shares/services/Mail";

@Controller('send_mail')
export class MailController {
  @Post()
  async sendMail() {
    await GmailServer.send(['bangtx@yopmail.com'], 'ok', 'ok')
  }
}