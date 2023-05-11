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

  selectedItem?: Item;
  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  constructor(private itemService: ItemService) { }


  ngOnInit(): void {
    this.getItems();
  }
  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }
  add(id: string,name: string, description: string, price: string,): void {
    name = name.trim();
    description = description.trim();
    price = price.trim();
    parseInt(id = id.trim());

    if (!name && !description && !price) { return; }
    this.itemService.addItem({id, name, description, price, image: "./assets/images/image1.jpg"} as unknown as Item)
      .subscribe(item => {
        this.items.push(item);
      });
      console.log(this.items);
  }
  delete(item: Item): void {
    this.items = this.items.filter(i => i !== item);
    this.itemService.deleteItem(item.id).subscribe();
  }
}
