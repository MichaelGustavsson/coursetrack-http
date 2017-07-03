import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { ICourse } from './course';
import { CourseTrackService } from './coursetrack.service';

@Component({
  moduleId: module.id,
  selector: 'course-detail',
  templateUrl: './course-detail.component.html'
})
export class CourseDetailComponent implements OnInit, OnChanges {
/***************************************************************/
// PROPERTIES...
/***************************************************************/
  course: ICourse;
  courseForm: FormGroup;
  formErrors = {};
  validationMessages = {};

  pageTitle: string;

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _courseTrackService: CourseTrackService) {
    this.setupForm();
  };

/******************************************************************/
// PUBLIC METHODS...
/******************************************************************/
  cancel() {
    this.ngOnChanges();
  };

  goBack(): void {
    this._router.navigate(['/courses']);
  }

  ngOnChanges(): void {
    this.courseForm.reset({
      courseNumber: this.course.courseNumber,
      title: this.course.title,
      duration: this.course.duration,
      description: this.course.description
    });
  };

  ngOnInit(): void {
     if (!this.course) {
      this._route.params
        .map((params: Params) => params['id'])
        .subscribe(id => {
          console.log(id);
          if (id !== 'new') {
            this.getCourse(+id);
            return;
          }

          this.course = {} as ICourse;
          this.setFormValue();
          this.onValueChanged(null);
          this.ngOnChanges();
          return;
        });
    }
  };

  save(): void {
    this.course = this.prepareForSave();
    this._courseTrackService.update(this.course)
      .then(() => this.ngOnChanges());
  };

/********************************************************************/
// PRIVATE FUNCTIONS...
/********************************************************************/
  private getCourse(id: number): void {
    this._courseTrackService.getCourse(id)
      .then((course: ICourse) => {
        this.course = course;
        this.setFormValue();
      });
  };

  private onValueChanged(data?: any) {
    if (!this.courseForm) { return; };

    const form = this.courseForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  };

  private prepareForSave(): ICourse {
    const model = this.courseForm.value;
    const course: ICourse = {
      id: this.course.id,
      courseNumber: model.courseNumber as string,
      description: model.description as string,
      duration: model.duration as string,
      title: model.title as string
    };
    return course;
  };

  private setFormValue(): void {
    this.courseForm.setValue({
      courseNumber: this.course.courseNumber || '',
      title: this.course.title || '',
      duration: this.course.duration || '',
      description: this.course.description || ''
    });
  };

  private setupForm(): void {
    this.courseForm = this._formBuilder.group({
      courseNumber: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
        ]
      ],
      title: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.formErrors = {
      'courseNumber': '',
      'title': '',
      'duration': '',
      'description': ''
    };

    this.validationMessages = {
      'courseNumber': {
        'required': 'Course number is required.',
        'minlength': 'Course number must be at least 4 characters',
        'maxlength': 'Course number cannot be more than 4 characters'
      },
      'title': { 'required': 'Course title is required' },
      'duration': { 'required': 'Course duration is required' },
      'description': { 'required': 'Course description is required' }
    };

    this.courseForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  };
}
