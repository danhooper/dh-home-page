import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RSSService } from './rss.service';
import { RSS } from './rss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [RSSService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private rssService: RSSService) {}
  ngOnInit(): void {
    this.getRSS();
  }

  getRSS(): void {
    this.rssService.getRSS().then((rss) => this.rssList = rss);
  }
  title = 'app works!';
  rssList: RSS[];
}
