import { Component , OnInit } from '@angular/core';
import { List, buildSampleList } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'End of Stuff!';
  lists: List[];

  ngOnInit() {
    const MIN_COUNT = 9;
    const MAX_COUNT = 15;
    const LIST_COUNT = MIN_COUNT + Math.floor((1 + MAX_COUNT - MIN_COUNT) * Math.random());
    this.lists = Array.from(new Array(LIST_COUNT), buildSampleList);
  }
}
