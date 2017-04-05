import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { RSS } from './rss';

@Injectable()
export class RSSService {
	private rssUrl = 'http://localhost:3000';
  constructor(private http: Http) { }
	getRSS(): Promise<RSS[]> {
		return this.http.get(this.rssUrl)
									 .toPromise()
									 .then(response => response.json() as RSS[])
									 .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
