abstract class SendNoti {
  abstract send(): void
}

class SendMail extends SendNoti {
  send() {
    console.log('send mail ok')
  }
}

class SendSms extends SendNoti {
  send() {
    console.log('send sms ok')
  }
}



class Main {

  // dependencies inversion
  sendNoti(noti: SendNoti) {
    // todo should take about enum
    noti.send()
  }

  // static
  // dependencies injection
  main() {
    const noti = new SendSms()
    this.sendNoti(noti)
  }
}

new Main().main()

