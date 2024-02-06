import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollServiceService {
  private sectionToScroll = new Subject<string>();

  sectionToScroll$ = this.sectionToScroll.asObservable();

  setSectionToScroll(sectionId: string) {
    this.sectionToScroll.next(sectionId);
  }
  constructor() {}
}
