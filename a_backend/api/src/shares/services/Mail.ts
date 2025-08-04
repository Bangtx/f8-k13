import * as nodemailer from 'nodemailer';
import {Injectable} from "@nestjs/common";

const GMAIL_HOST = 'smtp.gmail.com'


interface MailService {
  send: (receivers: string[], subject: string, content: string) => Promise<void>
}

@Injectable()
class MailServiceImpl implements MailService {
  private sender: string
  private password: string
  private mailServer: string // gmail / mailhog
  private transporter: any

  constructor(sender: string, password: string, mailServer: string) {
    this.mailServer = mailServer
    this.sender = sender
    this.password = password

    this.getTransporter()
  }

  private getTransporter(){
    this.transporter = nodemailer.createTransport({
      host: this.mailServer,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: this.sender,
        pass: this.password,
      },
    });
  }

  async send (
    receivers: string[],
    subject: string,
    content: string // html or text
  ) {
    await this.transporter.sendMail({
      from: this.sender,
      to: receivers.join(', '),
      subject: subject,
      html: content, // HTML body
    });
  }
}

class MailHogService implements MailService {
  private sender: string
  private transporter: any

  constructor(sender: string) {
    this.sender = sender

    this.getTransporter()
  }

  private getTransporter(){
    this.transporter = nodemailer.createTransport({
      host: 'mailhog',
      port: 1025,
      secure: false, // true for 465, false for other ports
    });
  }

  async send (
    receivers: string[],
    subject: string,
    content: string // html or text
  ) {
    await this.transporter.sendMail({
      from: this.sender,
      to: receivers.join(', '),
      subject: subject,
      html: content, // HTML body
    });

    console.log('ok ko')
  }
}

export const GmailServer: MailService = new MailServiceImpl('bangtran.hha@gmail.com', 'hdyh icpk lsee mijw', GMAIL_HOST)
export const MailHog: MailService = new MailHogService('bangtran.test@gmail.com')