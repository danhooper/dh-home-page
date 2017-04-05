import { Component, OnInit } from '@angular/core';
import { RSSService } from '../rss.service';
import { RSS } from '../rss';

@Component({
  selector: 'dh-feed-list',
  templateUrl: './dh-feed-list.component.html',
  styleUrls: ['./dh-feed-list.component.css']
})
export class DhFeedListComponent implements OnInit {
  constructor(private rssService: RSSService) {}
  ngOnInit(): void {
    this.getRSS();
  }

  getRSS(): void {
    this.rssService.getRSS().then((rss) => {
      this.rssList = rss;
      this.rssList.forEach(this.rssService.getArticles);
    });
  }
  rssList: RSS[];


}
