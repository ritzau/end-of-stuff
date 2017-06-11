import { Injectable } from '@angular/core';

import { List } from './list';
import { generateRandomLists } from './random-lists';

@Injectable()
export class ListService {
  getLists(): Promise<List[]> {
    const MIN_COUNT = 9;
    const MAX_COUNT = 15;
    return Promise.resolve(generateRandomLists(MIN_COUNT, MAX_COUNT));
  }

  getListsSlowly(): Promise<List[]> {
    return new Promise(resolve => {
        // Simulate server latency with 2 second delay
        setTimeout(() => resolve(this.getLists()), 2000);
    });
  }
}
