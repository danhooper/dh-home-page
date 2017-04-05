import { Component, OnInit } from '@angular/core';
import { Feed } from '../feed';
import { FeedService } from '../feed.service';

@Component({
  selector: 'dh-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
})
export class FeedListComponent implements OnInit {
  constructor(private feedService: FeedService) {}
  ngOnInit(): void {
    this.getFeed();
  }

  getFeed(): void {
    this.feedService.getFeed().then((feed) => {
      this.feedList = feed;
      this.feedList.forEach(this.feedService.getArticles);
    });
  }
  feedList: Feed[];


}
