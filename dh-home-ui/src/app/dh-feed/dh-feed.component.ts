import { Component, OnInit, Input } from '@angular/core';
import { RSS } from '../rss';

@Component({
  selector: 'dh-feed',
  templateUrl: './dh-feed.component.html',
  styleUrls: ['./dh-feed.component.css']
})
export class DhFeedComponent implements OnInit {

  @Input() rss: RSS;

  constructor() { }

  ngOnInit() {
  }

}
