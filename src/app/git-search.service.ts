import { Injectable } from '@angular/core';
import { GitSearch } from './git-search';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  cachedValues: Array<{
    [query: string]: GitSearch
  }> = [];

  constructor(private http: HttpClient) {
    this.http = http;
  }

  gitSearch = (query: string, page: number): Promise<GitSearch> => {
    const promise = new Promise<GitSearch>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query]);
      } else {
        this.http.get('https://api.github.com/search/repositories?q=' + query + '&page=' + page)
          .toPromise()
          .then((data) => {
            resolve(data as GitSearch);
          }, (err) => {
            reject(err);
          });
      }
    });
    return promise;
  }
}
