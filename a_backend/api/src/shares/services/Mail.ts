const GMAIL_HOST = 'smtp.gmail.com'


interface MailService {
  send: (receivers: string[], subject: string, content: string) => void
}


class MailServiceImpl implements MailService {
  private sender: string
  private password: string
  private mailServer: string // gmail / mailhog
  private transporter

  constructor(sender: string, password: string, mailServer: string) {
    this.mailServer = mailServer
    this.sender = sender
    this.password = password

    // this.transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 465,
    //   secure: true, // true for 465, false for other ports
    //   auth: {
    //     user: "bangtran.hha@gmail.com",
    //     pass: "hdyh icpk lsee mijw",
    //   },
    // });
  }

  send: (
    receivers: string[],
    subject: string,
    content: string // html or text
  ) => {
    // code
  }
}

class ForgotPasswordMail extends MailServiceImpl {
  private getContent(code: string) {
    return `
      <h1>Forgot password</h1>
      <p>you are requesting .....</p>
    `
  }
}

export const GmailServer: MailService = new MailServiceImpl('bangtran.hha@gmail.com', 'hdyh icpk lsee mijw', GMAIL_HOST)
