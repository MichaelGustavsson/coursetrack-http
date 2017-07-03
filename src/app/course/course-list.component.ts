import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ICourse } from './course';
import { CourseTrackService } from './coursetrack.service';

@Component({
moduleId: module.id,
  selector: 'course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  courses: ICourse[];
  currentCourse: ICourse;
  errorMessage: string;
  pageTitle: string = 'Current courses';

  constructor(private _courseTrackService: CourseTrackService, private _router: Router) { }

  create() {
    this._router.navigate(['/course', 'new']);
  };

  delete(course: ICourse): void {
    this._courseTrackService.delete(course.id)
      .then(() => {
        this.getCourses();
      })
      .catch((error: any) => this.errorMessage = error);
  };

  getCourse(courseNo: string): void {
    this._router.navigate(['/course', courseNo]);
  };

  getCourses(): void {
    this._courseTrackService.getCoursesPromise()
      .then(result => this.courses = result);
  };

  ngOnInit(): void {
    this.getCourses();
  };
}
