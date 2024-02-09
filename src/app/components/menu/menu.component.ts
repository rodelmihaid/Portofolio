import { Component, ElementRef, OnInit } from '@angular/core';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private scrollService: ScrollServiceService
  ) {}

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
  scrollToSkills() {
    const skills = this.el.nativeElement.querySelector('#skills');
    if (skills) {
      skills.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToCV() {
    const cv = this.el.nativeElement.querySelector('#cv');
    if (cv) {
      cv.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToContact() {
    const contact = this.el.nativeElement.querySelector('#contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  }
  ngOnInit() {
    this.scrollService.sectionToScroll$.subscribe((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
