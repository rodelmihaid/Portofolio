import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  openWhatsApp() {
    // Verifică dacă utilizatorul este pe un dispozitiv mobil
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // Dacă da, deschide link-ul pentru WhatsApp
      window.location.href = 'whatsapp://send?phone=+40759454283';
    } else {
      // Dacă nu, deschide link-ul pentru laptop
      window.open('https://wa.me/+40759454283', '_blank');
    }
  }
}
