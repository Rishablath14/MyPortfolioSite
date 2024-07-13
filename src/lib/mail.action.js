"use server"
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SENDER_MAIL,
    pass: process.env.SENDER_PASS,
  },
});

export const sendMail = async (subject,message) => {
 try{
     await transporter.sendMail({
         from: process.env.SENDER_MAIL,
         to: "reshablath@gmail.com",
         subject: `Query from Portfolio - ${subject}`,
         text: message,
        });
     return true;    
    }catch(error){ console.log(error);return false;}
}
