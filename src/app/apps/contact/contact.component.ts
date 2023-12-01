import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  btnText = 'Send a message';
  btnDisable = false;
  constructor() {}

  async newEmail(){
    this.btnText = 'Sending...'
    emailjs.init(environment.publicId)

    const forMe = await emailjs.send(environment.serviceId,environment.templateId,{
      from_name: "Kevin SDM",
      to_name: "Kevin Feliz",
      email: "kfeliz@sdm.com.do",
      phone: "8098898989",
      message: "Hola tienes una nueva notificación de Kevin SDM",
      reply_to: "kfeliz@sdm.com.do",
      to_email: "kevinfeliz2016@gmail.com",
    });

    const forHim = await emailjs.send(environment.serviceId,environment.templateId,{
      from_name: "Kevin Feliz (DevKevs)",
      to_name: "Kevin SDM",
      email: "kevinfeliz2016@gmail.com",
      phone: "(849) 626-9698",
      message: "Gracias por contactarte con DevKevs, en un plazo de 24 horas estarás recibiendo una respuesta!",
      reply_to: "kevinfeliz2016@gmail.com",
      to_email: "kfeliz@sdm.com.do",
    });

    this.btnText = 'Completed!'
    this.btnDisable = true;
    console.log(forMe, forHim);
  }
}
