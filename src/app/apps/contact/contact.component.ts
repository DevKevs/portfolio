import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  btnText = 'Send a message';
  btnDisable = false;
  contactForm = this.fb.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  })
  constructor(private fb: FormBuilder) {}

  async newEmail(){
    if (this.contactForm.invalid) {
      this.errorAlert('One or more fields are empty or invalid; please fill them in to proceed.', 'Incomplete form');
      return;
    }
    this.btnText = 'Sending...'
    emailjs.init(environment.publicId)

    await emailjs.send(environment.serviceId,environment.templateId,{
      from_name: this.contactForm.value.name,
      to_name: "Kevin Feliz",
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      message: this.contactForm.value.message,
      reply_to: this.contactForm.value.email,
      to_email: "kevinfeliz2016@gmail.com",
    });

    await emailjs.send(environment.serviceId,environment.templateId,{
      from_name: "Kevin Feliz (DevKevs)",
      to_name: this.contactForm.value.name,
      email: "kevinfeliz2016@gmail.com",
      phone: "(849) 626-9698",
      message: "Thank you for reaching out to DevKevs. Your inquiry is important to me. I'm committed to providing you with a thoughtful and detailed response. Please feel free to ask any additional questions or share further details. I'll do my best to assist you promptly, and you can expect a comprehensive reply within 24 hours. Looking forward to helping you!",
      reply_to: "kevinfeliz2016@gmail.com",
      to_email: this.contactForm.value.email,
    });

    this.notificationAlert('Message send successfully!')
    this.btnText = 'Completed!'
    this.btnDisable = true;
    this.contactForm.reset();
  }

  errorAlert(errorMsg: string, errorTitle: string) {
    Swal.fire({
      title: errorTitle,
      text: errorMsg,
      icon: 'error',
      confirmButtonText: 'Salir',
    });
  }
  notificationAlert(msg: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: msg,
      heightAuto: false,
    });
  }
}
