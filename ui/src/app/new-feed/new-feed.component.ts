import { Component, OnInit } from '@angular/core';
import { Feed } from '../feed';
import { MdDialogRef } from '@angular/material';
import { FeedService } from '../feed.service';

@Component({
  selector: 'dh-new-feed',
  templateUrl: './new-feed.component.html',
  styleUrls: ['./new-feed.component.scss'],
  providers: []
})
export class NewFeedComponent implements OnInit {
  feed: Feed;

  constructor(public dialogRef: MdDialogRef<NewFeedComponent>, private feedService: FeedService) {
    this.feed = new Feed();
  }

  ngOnInit() {
  }

  saveFeed() {
    this.feedService.saveFeed(this.feed).then((feed) => {
      this.dialogRef.close(feed);
    });
  }

}
