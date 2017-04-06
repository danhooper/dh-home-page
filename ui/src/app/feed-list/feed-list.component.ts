import { Component, OnInit } from '@angular/core';
import { Feed } from '../feed';
import { FeedService } from '../feed.service';
import { NewFeedComponent } from '../new-feed/new-feed.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dh-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
})
export class FeedListComponent implements OnInit {
  constructor(private feedService: FeedService, private modalService: NgbModal) {}
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
    let modalRef = this.modalService.open(NewFeedComponent);
    modalRef.result.then((feed) => {
      if (feed) {
        this.feedList.push(feed);
        this.feedService.getArticles(feed);
      }
    });
  }

  feedList: Feed[];


}
