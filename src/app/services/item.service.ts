import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from '../models/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[] = [];

  private itemsUrl = 'api/items';  // URL to web api

  constructor(private inmemorydb: InMemoryDbService, private http: HttpClient) { }

  /** GET items from the server */
  getItems(): Observable<Item[]> {
  return this.http.get<Item[]>(this.itemsUrl)
  }

}
