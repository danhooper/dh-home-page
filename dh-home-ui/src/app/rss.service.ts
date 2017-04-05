import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { RSS } from './rss';
import { RSSArticle } from './rss-article';

@Injectable()
export class RSSService {
	private rssUrl = 'http://localhost:3000/feed';
  constructor(private http: Http) { }
	getRSS(): Promise<RSS[]> {
		return this.http.get(this.rssUrl)
									 .toPromise()
									 .then(response => response.json() as RSS[])
									 .catch(this.handleError);
  }

  getArticles = (rss: RSS): Promise<RSSArticle[]> =>  {
		return this.http.get(`${this.rssUrl}/${rss.id}/article`)
									 .toPromise()
									 .then(response => {
                      rss.articles = response.json() as RSSArticle[];
                      return rss.articles;
                    })
									 .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
