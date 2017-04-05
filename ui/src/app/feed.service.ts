import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Feed } from './feed';
import { Article } from './article';

@Injectable()
export class FeedService {
	private feedUrl = 'http://localhost:3000/feed';
  constructor(private http: Http) { }
	getFeed(): Promise<Feed[]> {
		return this.http.get(this.feedUrl)
									 .toPromise()
									 .then(response => response.json() as Feed[])
									 .catch(this.handleError);
  }

  getArticles = (feed: Feed): Promise<Article[]> =>  {
		return this.http.get(`${this.feedUrl}/${feed.id}/article`)
									 .toPromise()
									 .then(response => {
                      feed.articles = response.json() as Article[];
                      return feed.articles;
                    })
									 .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

