import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit{
  items: Item[] = [];

  constructor(private itemService: ItemService) { }


  ngOnInit(): void {
    this.getItems();
  }
  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }
}