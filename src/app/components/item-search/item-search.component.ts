import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.scss']
})
export class ItemSearchComponent {
  items$!: Observable<Item[]>;
  private searchTerms = new Subject<string>();

  constructor(private itemService: ItemService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.items$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.itemService.searchItems(term)),
    );
  }
}

