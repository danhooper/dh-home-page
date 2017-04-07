import { Component, OnInit, Input } from '@angular/core';
import { Feed } from '../../../../models/feed';

@Component({
  selector: 'dh-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  @Input() feed: Feed;

  constructor() { }

  ngOnInit() {
  }

}
