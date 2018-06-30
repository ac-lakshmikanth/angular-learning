import { Component, OnInit } from '@angular/core'
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  searchResults: GitSearch;
  searchQuery: string;
  title: string;
  displayQuery: string;
  pageNumber = 1;
  constructor(
    private gitSearchService: GitSearchService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.searchQuery = params.get('query');
        this.pageNumber = parseInt(params.get('pageNumber'), 10);
        this.gitSearch();
      });
      this.route.data.subscribe((result) => {
        this.title = result.title;
      });
  }

  gitSearch = () => {
    this.gitSearchService.gitSearch(this.searchQuery, this.pageNumber)
        .then((data) => {
          console.log(data);
          this.searchResults = data;
        })
        .catch((err) => console.log(err));
  }

  sendQuery = () => {
    this.searchResults = null;
    this.router.navigate(['/search/' + this.searchQuery + '/' + this.pageNumber]);
  }

  goToNextPage = () => {
    this.pageNumber = this.pageNumber + 1;
    this.sendQuery();
  }

  goToPreviousPage = () => {
    this.pageNumber = this.pageNumber - 1;
    if (this.pageNumber <= 0) {
      this.pageNumber = 1;
    }
    this.sendQuery();
  }

}
