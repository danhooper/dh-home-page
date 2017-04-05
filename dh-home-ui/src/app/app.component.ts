import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RSSService } from './rss.service';
import { RSS } from './rss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
  }

}
