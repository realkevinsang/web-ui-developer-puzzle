import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './+state/books/books.effects';
import { ReadingListEffects } from './+state/reading-list/reading-list.effects';
import * as fromBooks from './+state/books/books.reducer';
import * as fromReadingList from './+state/reading-list/reading-list.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromBooks.BOOKS_FEATURE_KEY, fromBooks.reducer),
    StoreModule.forFeature(
      fromReadingList.READING_LIST_FEATURE_KEY,
      fromReadingList.reducer
    ),
    EffectsModule.forFeature([BooksEffects, ReadingListEffects])
  ]
})
export class BooksDataAccessModule {}
