import { Component, OnInit, Input, AfterContentChecked, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material';
import { HomeFilterPipe } from '../../../shared/pipes/home-filter.pipe';
import { SortMoviePipe } from '../../../shared/pipes/sort-movie.pipe';
import * as UserState from '../../../reducers/index';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-s-dialog-cards',
  templateUrl: './s-dialog-cards.component.html',
  styleUrls: ['./s-dialog-cards.component.scss']
})
export class SDialogCardsComponent implements AfterContentChecked, DoCheck, OnInit {
  @Input() movieList; // movie seperated by language
  @Input() movieFilter; // genre
  @Input() languageList; // list of languages
  @Input() selectedLanguage; // user language selection
  userPreference: any = [];


  constructor(private userStore: Store<UserState.State>) {}

  ngOnInit(): void {
    this.userStore.select(UserState.userSelector).subscribe(result => {
      this.userPreference = result.preference;
    });
  }
  track(_index, item) {
        return item;
  }
  ngAfterContentChecked() {}

  ngDoCheck(): void {}
}
