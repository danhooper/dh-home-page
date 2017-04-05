import { Component, OnInit } from '@angular/core';
import { Feed } from '../feed';
import { FeedService } from '../feed.service';
import { MdDialog } from '@angular/material';
import { NewFeedComponent } from '../new-feed/new-feed.component';

@Component({
  selector: 'dh-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
})
export class FeedListComponent implements OnInit {
  constructor(private feedService: FeedService, private dialog: MdDialog) {}
  ngOnInit(): void {
    this.getFeed();
  }

  getFeed(): void {
    this.feedService.getFeed().then((feed) => {
      this.feedList = feed;
      this.feedList.forEach(this.feedService.getArticles);
    });
  }

  createFeed(): void {
    let dialogRef = this.dialog.open(NewFeedComponent);
    dialogRef.afterClosed().subscribe(feed => {
      this.feedList.push(feed);
      this.feedService.getArticles(feed);
    });
  }

  feedList: Feed[];


}
