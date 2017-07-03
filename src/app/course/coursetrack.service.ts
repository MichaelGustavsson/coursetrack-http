import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

import { ICourse } from './course';

@Injectable()
export class CourseTrackService {
  private _url: string = 'api/courses'; // url pointing to fake address
  private _headers: Headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private _http: Http) { }

  delete(id: number): Promise<void> {
    const url = `${this._url}/${id}`;
    return this._http.delete(url, { headers: this._headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  };

  // Method for fetching a list of courses
  getCourses(): Observable<ICourse[]> {
    return this._http.get(this._url)
      .do(response => console.log(response.json())) // Use do for debugging reason, uncomment when done.
      .map(this.loadDataFromJson) // Best practise to delegate this to a method.
      .catch(this.handleError); // Best practise is to delegate errorhandling to a method.
  };

  getCoursesPromise(): Promise<ICourse[]> {
    return this._http.get(this._url)
      .toPromise()
      .then(this.loadDataFromJson)
      .catch(this.handleErrorPromise);
  }

  // Method for fetching one specific course by it's course number.
  getCourse(id: number): Promise<ICourse> {
    const url = `${this._url}/${id}`;

    return this._http.get(url)
      .toPromise()
      .then(this.loadDataFromJson)
      .catch(this.handleErrorPromise);
  };

  update(course: ICourse): Promise<ICourse> {
    const url = `${this._url}/${course.id}`;
    return this._http
      .put(url, JSON.stringify(course), { headers: this._headers })
      .toPromise()
      .then(() => course)
      .catch(this.handleError);
  };

  // Private method for extracting data from a json response.
  private loadDataFromJson(response: Response): any {
    let body = response.json();
    return body.data || '';
  };

  private handleError(error: any): Observable<any> {
    let msg: string;

    msg = `Ooops something went wrong ${error}`;
    console.log(error.json()); // For debugging purpuse only.
    return Observable.throw(msg);
  };

  private handleErrorPromise(error: any): Promise<any> {
    let msg: string;

    msg = `Ooops something went wrong ${error}`;
    console.log(error.json()); // For debugging purpuse only.
    return Promise.reject(msg || '');
  };
}
