import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, markAsFinished, removeFromReadingList } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit,OnDestroy {
  // readingList$ = this.store.select(getReadingList);
  readingList: ReadingListItem[];
  readingList$: Subscription;

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.readingList$ = this.store.select(getReadingList).subscribe(list => {
      this.readingList = list;
    })
  }

  ngOnDestroy() {
    this.readingList$.unsubscribe();
  }

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  markedAsFinished(item) {
    this.store.dispatch(markAsFinished({ item }));
  }
}
