import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitUsers } from './git-users';
import 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitUsersService {

  cachedUsers: Array<{[query: string]: GitUsers}> = [];

  constructor(private http: HttpClient) { }

  getUsers(query: string): Promise<GitUsers> {
    return this.http.get<GitUsers>('https://api.github.com/search/users?q=' + query).toPromise();
  }
}
