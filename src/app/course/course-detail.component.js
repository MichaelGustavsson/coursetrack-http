"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var coursetrack_service_1 = require("./coursetrack.service");
var CourseDetailComponent = (function () {
    function CourseDetailComponent(_route, _router, _formBuilder, _courseTrackService) {
        this._route = _route;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._courseTrackService = _courseTrackService;
        this.formErrors = {};
        this.validationMessages = {};
        this.setupForm();
    }
    ;
    /******************************************************************/
    // PUBLIC METHODS...
    /******************************************************************/
    CourseDetailComponent.prototype.cancel = function () {
        this.ngOnChanges();
    };
    ;
    CourseDetailComponent.prototype.goBack = function () {
        this._router.navigate(['/courses']);
    };
    CourseDetailComponent.prototype.ngOnChanges = function () {
        this.courseForm.reset({
            courseNumber: this.course.courseNumber,
            title: this.course.title,
            duration: this.course.duration,
            description: this.course.description
        });
    };
    ;
    CourseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.course) {
            this._route.params
                .map(function (params) { return params['id']; })
                .subscribe(function (id) {
                console.log(id);
                if (id !== 'new') {
                    _this.getCourse(+id);
                    return;
                }
                _this.course = {};
                _this.setFormValue();
                _this.onValueChanged(null);
                _this.ngOnChanges();
                return;
            });
        }
    };
    ;
    CourseDetailComponent.prototype.save = function () {
        var _this = this;
        this.course = this.prepareForSave();
        this._courseTrackService.update(this.course)
            .then(function () { return _this.ngOnChanges(); });
    };
    ;
    /********************************************************************/
    // PRIVATE FUNCTIONS...
    /********************************************************************/
    CourseDetailComponent.prototype.getCourse = function (id) {
        var _this = this;
        this._courseTrackService.getCourse(id)
            .then(function (course) {
            _this.course = course;
            _this.setFormValue();
        });
    };
    ;
    CourseDetailComponent.prototype.onValueChanged = function (data) {
        if (!this.courseForm) {
            return;
        }
        ;
        var form = this.courseForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    ;
    CourseDetailComponent.prototype.prepareForSave = function () {
        var model = this.courseForm.value;
        var course = {
            id: this.course.id,
            courseNumber: model.courseNumber,
            description: model.description,
            duration: model.duration,
            title: model.title
        };
        return course;
    };
    ;
    CourseDetailComponent.prototype.setFormValue = function () {
        this.courseForm.setValue({
            courseNumber: this.course.courseNumber || '',
            title: this.course.title || '',
            duration: this.course.duration || '',
            description: this.course.description || ''
        });
    };
    ;
    CourseDetailComponent.prototype.setupForm = function () {
        var _this = this;
        this.courseForm = this._formBuilder.group({
            courseNumber: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(4)
                ]
            ],
            title: ['', forms_1.Validators.required],
            duration: ['', forms_1.Validators.required],
            description: ['', forms_1.Validators.required],
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
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    ;
    return CourseDetailComponent;
}());
CourseDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'course-detail',
        templateUrl: './course-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        forms_1.FormBuilder,
        coursetrack_service_1.CourseTrackService])
], CourseDetailComponent);
exports.CourseDetailComponent = CourseDetailComponent;
//# sourceMappingURL=course-detail.component.js.map