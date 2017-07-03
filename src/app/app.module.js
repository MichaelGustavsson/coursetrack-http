"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
// Använd Angulars in-memory web api för att fejka ett web api.
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var coursetrack_data_service_1 = require("./data/coursetrack-data.service");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var course_list_component_1 = require("./course/course-list.component");
var course_detail_component_1 = require("./course/course-detail.component");
var coursetrack_service_1 = require("./course/coursetrack.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            app_routing_module_1.AppRoutingModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(coursetrack_data_service_1.InMemoryCourseTrackService)
        ],
        declarations: [
            app_component_1.AppComponent,
            course_list_component_1.CourseListComponent,
            course_detail_component_1.CourseDetailComponent
        ],
        providers: [
            coursetrack_service_1.CourseTrackService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map