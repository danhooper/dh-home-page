import { Component, OnInit } from '@angular/core';
import { Feed } from '../../../../models/feed';
import { FeedService } from '../feed.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dh-new-feed',
  templateUrl: './new-feed.component.html',
  styleUrls: ['./new-feed.component.scss'],
  providers: []
})
export class NewFeedComponent implements OnInit {
  feed: Feed;

  constructor(private feedService: FeedService, public activeModal: NgbActiveModal) {
    this.feed = new Feed();
  }

  ngOnInit() {
  }

  saveFeed() {
    this.feedService.saveFeed(this.feed).then((feed) => {
      this.activeModal.close(feed);
    });
  }

}
