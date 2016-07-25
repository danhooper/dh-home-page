import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'app-dh-new-feed',
  templateUrl: 'dh-new-feed.component.html',
  styleUrls: ['dh-new-feed.component.css']
})
export class DhNewFeedComponent implements OnInit {
  newFeed = {
    title: ''
  };

  constructor(private http: Http) {}

  ngOnInit() {
  }

  save() {
    let body = JSON.stringify(this.newFeed);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log('save', body);
    this.http.post('http://localhost:3000/feed', body, options).subscribe((response) => console.log(response), (err) => console.log('err', err));
  }

}
