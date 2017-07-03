import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

// Använd Angulars in-memory web api för att fejka ett web api.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryCourseTrackService } from './data/coursetrack-data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseListComponent } from './course/course-list.component';
import { CourseDetailComponent } from './course/course-detail.component';
import { CourseTrackService } from './course/coursetrack.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryCourseTrackService)
  ],
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailComponent
  ],
  providers: [
    CourseTrackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
