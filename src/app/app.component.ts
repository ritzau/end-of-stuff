import { Component , OnInit } from '@angular/core';

import { ListService } from './list.service';

import { List } from './list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'End of Stuff!';
  lists: List[];

  constructor(private listService: ListService) { }

  populateLists(): void {
    this.listService.getLists().then(lists => this.lists = lists);
  }

  ngOnInit() {
    this.populateLists();
  }
}
