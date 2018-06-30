import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitUsersService } from './git-users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GitHub Browser';

  constructor(private gitSearchService: GitSearchService, private gitUsersService: GitUsersService) {}

  ngOnInit() {
    // this.gitSearchService.gitSearch('angular')
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));

    //   this.gitUsersService.getUsers('lakshmikanth')
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err))
  }
}
