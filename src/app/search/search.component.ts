import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText = '';
  starWarsChar = [];
  searchForm: FormGroup;
  preloader = false;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl()
    })
  }

  onEnterSearch(data) {
    this.preloader = true;
    this.searchService.onEnterSearchValue(data).subscribe(res => {
      console.log(res);
      this.starWarsChar = res.results;
      console.log(this.starWarsChar);
      this.preloader = false;
    })
  }

}
