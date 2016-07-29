import { Component } from '@angular/core';
import { DhRSSCacheService } from './dh-rsscache.service';

@Component({
  moduleId: module.id,
  selector: 'dh-home-page-app',
  templateUrl: 'dh-home-page.component.html',
  styleUrls: ['dh-home-page.component.css'],
  providers: [DhRSSCacheService]
})
export class DhHomePageAppComponent {
  title = 'dh-home-page works!';
  feeds = [];

  constructor(private cache: DhRSSCacheService) {
    this.cache.getFeeds().subscribe((response) => {
      this.feeds = response.json();
      for(var feed of this.feeds) {
        feed.articles = [];
        this.getArticles(feed);
      }
    });
  }

  getArticles(feed) {
    this.cache.getArticles(feed).subscribe((response) => {
      feed.articles = response.json();
    });
  }

  toggleArticle(article) {
    article.expanded = !article.expanded;
  }


}
