import { Component } from '@angular/core';
import { DownloadPdfService } from 'src/app/services/download-pdf.service';
import { ScrollServiceService } from 'src/app/services/scroll-service.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  constructor(
    private scrollService: ScrollServiceService,
    private pdfDownloadService: DownloadPdfService
  ) {}
  scrollToExpertise() {
    this.scrollService.setSectionToScroll('contact');
  }

  onDownloadClick() {
    this.pdfDownloadService.downloadPdf();
  }
}
