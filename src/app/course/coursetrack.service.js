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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/toPromise");
require("rxjs/add/observable/throw");
var CourseTrackService = (function () {
    function CourseTrackService(_http) {
        this._http = _http;
        this._url = 'api/courses'; // url pointing to fake address
        this._headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    CourseTrackService.prototype.delete = function (id) {
        var url = this._url + "/" + id;
        return this._http.delete(url, { headers: this._headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    ;
    // Method for fetching a list of courses
    CourseTrackService.prototype.getCourses = function () {
        return this._http.get(this._url)
            .do(function (response) { return console.log(response.json()); }) // Use do for debugging reason, uncomment when done.
            .map(this.loadDataFromJson) // Best practise to delegate this to a method.
            .catch(this.handleError); // Best practise is to delegate errorhandling to a method.
    };
    ;
    CourseTrackService.prototype.getCoursesPromise = function () {
        return this._http.get(this._url)
            .toPromise()
            .then(this.loadDataFromJson)
            .catch(this.handleErrorPromise);
    };
    // Method for fetching one specific course by it's course number.
    CourseTrackService.prototype.getCourse = function (id) {
        var url = this._url + "/" + id;
        return this._http.get(url)
            .toPromise()
            .then(this.loadDataFromJson)
            .catch(this.handleErrorPromise);
    };
    ;
    CourseTrackService.prototype.update = function (course) {
        var url = this._url + "/" + course.id;
        return this._http
            .put(url, JSON.stringify(course), { headers: this._headers })
            .toPromise()
            .then(function () { return course; })
            .catch(this.handleError);
    };
    ;
    // Private method for extracting data from a json response.
    CourseTrackService.prototype.loadDataFromJson = function (response) {
        var body = response.json();
        return body.data || '';
    };
    ;
    CourseTrackService.prototype.handleError = function (error) {
        var msg;
        msg = "Ooops something went wrong " + error;
        console.log(error.json()); // For debugging purpuse only.
        return Observable_1.Observable.throw(msg);
    };
    ;
    CourseTrackService.prototype.handleErrorPromise = function (error) {
        var msg;
        msg = "Ooops something went wrong " + error;
        console.log(error.json()); // For debugging purpuse only.
        return Promise.reject(msg || '');
    };
    ;
    return CourseTrackService;
}());
CourseTrackService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CourseTrackService);
exports.CourseTrackService = CourseTrackService;
//# sourceMappingURL=coursetrack.service.js.map