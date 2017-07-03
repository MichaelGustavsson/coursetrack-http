"use strict";
var InMemoryCourseTrackService = (function () {
    function InMemoryCourseTrackService() {
    }
    InMemoryCourseTrackService.prototype.createDb = function () {
        var courses = [
            {
                id: 1,
                courseNumber: '1610',
                duration: '4',
                title: 'jQuery Introduction',
                description: 'jQuery simplifies the process of creating powerful Web 2.0 applications that include dynamic content and visual effects. In this course, you learn to apply jQuery as a tool for rapid development of modern, feature-rich websites. You build standards-compliant, responsive web pages with Ajax, design easy-to-use forms, extend jQuery with plugins and improve user experience.'
            }, {
                id: 2,
                courseNumber: '2319',
                duration: '4',
                title: 'JavaScript for Modern Web Development',
                description: 'You gain the knowledge and skills to leverage JavaScript to create modern, interactive websites. Through progressive enhancement, unobtrusive JavaScript and best practices, you enrich a website to optimize user experience and accessibility across multiple devices. This course is designed for those with prior experience using HTML and CSS.'
            }, {
                id: 3,
                courseNumber: '2320',
                duration: '4',
                title: 'HTML5 Web Development with CSS3 and JavaScript',
                description: 'HTML5 empowers web developers to enhance the user experience (UX) across all devices, from legacy desktop browsers to the latest smartphones and tablets. In this course, you will apply best practices and emerging standards for HTML markup, CSS styling and JavaScript programming to upgrade your web applications, improving site performance, accessibility and Search Engine Optimization (SEO) along the way.'
            }, {
                id: 4,
                courseNumber: '2321',
                duration: '4',
                title: 'Building Web Applications with AngularJS',
                description: 'AngularJS provides a comprehensive framework that allows you to develop modern Single Page Applications (SPAs) using your existing HTML and JavaScript skills. In this course you learn how to integrate AngularJS directives and expressions into HTML 5 markup and write AngularJS controllers and services to build a complete, feature-rich Single Page Web Application.'
            }, {
                id: 5,
                courseNumber: '2322',
                duration: '4',
                title: 'Building Web Applications with React',
                description: 'React, also known as React.js or ReactJS, is an open source JavaScript library from Facebook for building modern HTML5 web applications. Developers create high-performance User Interfaces with JSX components targeting a virtual DOM. Flux provides a complementary architectural pattern to construct client-side application functionality. In this course, you learn to build a complete application harnessing React.'
            }, {
                id: 6,
                courseNumber: '2323',
                duration: '4',
                title: 'ECMAScript Programming: The Next Generation JavaScript',
                description: 'The 6th and 7th releases of ECMAScript, also known as ES2015 and ES2016, extend the features of JavaScript making it a more powerful and efficient language for enterprise development. JavaScript is the standard language for browser-based development, and is increasingly being used at the server for business processing using Node.js. This course covers the new features added to JavaScript in the latest versions, ECMAScript 2015 and ECMAScript 2016. The course also teaches developers to utilize common tools and frameworks for package management, transpiling, deployment, testing, and application development.'
            }, {
                id: 7,
                courseNumber: '2324',
                duration: '4',
                title: 'Building Web Applications with Angular 2',
                description: 'Build responsive, enterprise-strength applications that run smoothly on desktop or mobile with this Angular 2 training course. Angular 2 provides a robust framework that facilitates the development of richly interactive applications running on multiple platforms. In this course, you gain practical experience building a complete Angular 2 application including: building components, creating directives, modularizing applications with the component router and building template-driven forms.'
            }, {
                id: 8,
                courseNumber: '4541',
                duration: '1',
                title: 'Programming Graphics & Multimedia in HTML5 & CSS3',
                description: 'HTML5 and CSS3 empower web developers to enhance the User Experience (UX) across all devices, from legacy desktop browsers to the latest smartphones and tablets. In this course, you leverage standards-based technologies to apply GPU-accelerated animations, dynamic graphics and multimedia components to a website that works everywhere.'
            }, {
                id: 8,
                courseNumber: '4543',
                duration: '1',
                title: 'Developing Offline Applications with HTML5',
                description: 'HTML5 empowers web developers to enhance the User Experience (UX) across all devices, from legacy desktop browsers to the latest smartphones and tablets. In this course, you learn to use new features of HTML5 and JavaScript to develop web applications that continue to work even when a network connection is unavailable, such as laptops in airplane mode and mobile devices outside of a cellular coverage area.'
            }, {
                id: 9,
                courseNumber: '4544',
                duration: '1',
                title: 'Getting to Know AngularJS',
                description: 'AngularJS is a modern JavaScript framework which makes it easy to build interactive web-based functionality that runs in desktop and mobile browsers. This course teaches you how to get started with the AngularJS Model View Controller (MVC) architecture and dependency injection functionality. You also learn how to connect to back-end REST services, and leverage routing to create a dynamic UI.'
            }, {
                id: 10,
                courseNumber: '4547',
                duration: '1',
                title: 'Fundamentals of jQuery',
                description: 'jQuery simplifies the process of creating powerful, dynamic web applications, improving usability and appearance through user interface enhancements and visual effects. In this course, you learn the fundamentals of the jQuery library, allowing you to find and manipulate any content within an HTML document with selectors and chained methods.'
            }, {
                id: 11,
                courseNumber: '4738',
                duration: '1',
                title: 'Building Directives with AngularJS',
                description: 'All DOM manipulation in Angular takes place inside directives. This course provides a fast-paced introduction to developing custom directives to create reusable templates and behavior.'
            }
        ];
        return { courses: courses };
    };
    return InMemoryCourseTrackService;
}());
exports.InMemoryCourseTrackService = InMemoryCourseTrackService;
//# sourceMappingURL=coursetrack-data.service.js.map