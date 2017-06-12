import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { List } from './list';

@Injectable()
export class ListService {
  private listsUrl = 'api/lists';

  constructor(private http: Http) { }

  getLists(): Promise<List[]> {
    return this.http.get(this.listsUrl)
               .toPromise()
               .then(response => response.json().data as List[])
               .catch(this.handleError);
    }

  getListsSlowly(): Promise<List[]> {
    return new Promise(resolve => {
        // Simulate server latency with 2 second delay
        setTimeout(() => resolve(this.getLists()), 2000);
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
