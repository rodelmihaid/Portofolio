import { Component } from '@angular/core';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  constructor(private scrollService: ScrollServiceService) {}

  scrollToExpertise() {
    this.scrollService.setSectionToScroll('aboutMe');
  }
}
