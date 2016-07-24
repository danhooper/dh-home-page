import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DhRSSCacheService {

  constructor(private http: Http) {
  }

  getFeeds () {
      return this.http.get('http://localhost:3000/');
  }

}
