import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private el: ElementRef) {}

  scrollUp() {
    const up = this.el.nativeElement.querySelector('#up');
    if (up) {
      up.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToAbout() {
    const aboutMe = this.el.nativeElement.querySelector('#aboutMe');
    if (aboutMe) {
      aboutMe.scrollIntoView({ behavior: 'smooth' });
    }
  }
  scrollToPortofolio() {
    const portofolio = this.el.nativeElement.querySelector('#portofolio');
    if (portofolio) {
      portofolio.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
