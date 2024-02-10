import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __await } from 'tslib';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  form: FormGroup = this.fb.group({
    from_name: '',
    from_email: '',
    message: '',
  });

  send() {
    emailjs.init('3-qrVCNGmTIPS8Xym');
    let response = emailjs.send('service_w90ted3', 'template_9il8tkz', {
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      message: this.form.value.message,
    });
    Swal.fire({
      icon: 'success',
      text: 'Message sent successfully',
      timer: 3000, // Ascunde automat alerta după 3 secunde
      timerProgressBar: true, // Bară de progres pentru durata alertei
      toast: true, // Afișează alerta ca și toast
      position: 'top-start', // Poziția alertei
      showConfirmButton: false, // Nu afișa butonul de confirmare
    });
    this.form.reset();
  }

  openWhatsApp() {
    // Verifică dacă utilizatorul este pe un dispozitiv mobil
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // Dacă da, deschide link-ul pentru WhatsApp
      window.location.href = 'whatsapp://send?phone=+40748517213';
    } else {
      // Dacă nu, deschide link-ul pentru laptop
      window.open('https://wa.me/+40748517213', '_blank');
    }
  }

  copyEmail() {
    // Adresa de email pe care vrei să o copiezi
    var email = 'rodelmihaid@gmail.com';

    // Creează un element input pentru a copia textul
    var inputElement = document.createElement('input');
    inputElement.value = email;
    document.body.appendChild(inputElement);

    // Selectează textul din elementul input
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // Pentru compatibilitatea cu browserele mobile

    // Copiază textul în clipboard
    document.execCommand('copy');

    // Șterge elementul input creat
    document.body.removeChild(inputElement);

    Swal.fire({
      icon: 'success',
      text: 'The email address has been copied.',
      timer: 3000, // Ascunde automat alerta după 3 secunde
      timerProgressBar: true, // Bară de progres pentru durata alertei
      toast: true, // Afișează alerta ca și toast
      position: 'top-start', // Poziția alertei
      showConfirmButton: false, // Nu afișa butonul de confirmare
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      from_name: ['', Validators.required],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
}
