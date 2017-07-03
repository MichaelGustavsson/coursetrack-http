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
var router_1 = require("@angular/router");
var coursetrack_service_1 = require("./coursetrack.service");
var CourseListComponent = (function () {
    function CourseListComponent(_courseTrackService, _router) {
        this._courseTrackService = _courseTrackService;
        this._router = _router;
        this.pageTitle = 'Current courses';
    }
    CourseListComponent.prototype.create = function () {
        this._router.navigate(['/course', 'new']);
    };
    ;
    CourseListComponent.prototype.delete = function (course) {
        var _this = this;
        this._courseTrackService.delete(course.id)
            .then(function () {
            _this.getCourses();
        })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    ;
    CourseListComponent.prototype.getCourse = function (courseNo) {
        this._router.navigate(['/course', courseNo]);
    };
    ;
    CourseListComponent.prototype.getCourses = function () {
        var _this = this;
        this._courseTrackService.getCoursesPromise()
            .then(function (result) { return _this.courses = result; });
    };
    ;
    CourseListComponent.prototype.ngOnInit = function () {
        this.getCourses();
    };
    ;
    return CourseListComponent;
}());
CourseListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'course-list',
        templateUrl: './course-list.component.html'
    }),
    __metadata("design:paramtypes", [coursetrack_service_1.CourseTrackService, router_1.Router])
], CourseListComponent);
exports.CourseListComponent = CourseListComponent;
//# sourceMappingURL=course-list.component.js.map