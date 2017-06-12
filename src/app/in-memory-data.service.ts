import { InMemoryDbService } from 'angular-in-memory-web-api';

import { generateRandomLists } from './random-lists';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const MIN_COUNT = 9;
    const MAX_COUNT = 15;
    const lists = generateRandomLists(MIN_COUNT, MAX_COUNT);

    return { lists };
  }
}