import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { List, buildSampleList } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    @Input() list: List;
}
