import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { CvComponent } from './components/cv/cv.component';
import { DescriptionComponent } from './components/description/description.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { MenuComponent } from './components/menu/menu.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './components/my-projects/projects.component';
import { MaterialModule } from './material.module';
import { ScrollServiceService } from './services/scroll-service.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CvComponent,
    DescriptionComponent,
    ExpertiseComponent,
    MenuComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [ScrollServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
