const nodeMailer = require('nodemailer');
class MailService {
    constructor () {
        const transporter = nodeMailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: 'netzoneforti4@gmail.com',
                pass : 'Derparol123',
            }
        });
    }
    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: 'netzoneforti4@gmail.com',
            to,
            subject: `Активация аккаунта на сайте Prosto-Vpn`,
            text:'',
            html: 
            `
            <div>
            <h1>Для активации перейдите по ссылке</h1>
            <a href = "${link}">${link}</a>
            </div>
            `
        })
    };
}

module.exports = new MailService;