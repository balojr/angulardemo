import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from '../models/item';
import { identifierName } from '@angular/compiler';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 1, name: 'Item 1', description: 'This is item 1', price: 100, quantity: 1, image: './assets/images/image1.jpg', category: 'Category 1' },
      { id: 2, name: 'Item 2', description: 'This is item 2', price: 200, quantity: 2, image: './assets/images/image2.jpg', category: 'Category 2' },
      { id: 3, name: 'Item 3', description: 'This is item 3', price: 300, quantity: 3, image: './assets/images/image3.jpg', category: 'Category 3' },
      { id: 4, name: 'Item 4', description: 'This is item 4', price: 400, quantity: 4, image: './assets/images/image4.jpg', category: 'Category 4' },
      { id: 5, name: 'Item 5', description: 'This is item 5', price: 500, quantity: 5, image: './assets/images/image5.jpg', category: 'Category 5' },
      { id: 6, name: 'Item 6', description: 'This is item 6', price: 600, quantity: 6, image: './assets/images/image1.jpg', category: 'Category 6' },
      { id: 7, name: 'Item 7', description: 'This is item 7', price: 700, quantity: 7, image: './assets/images/image2.jpg', category: 'Category 7' },
      { id: 8, name: 'Item 8', description: 'This is item 8', price: 800, quantity: 8, image: './assets/images/image3.jpg', category: 'Category 8' },
      { id: 9, name: 'Item 9', description: 'This is item 9', price: 900, quantity: 9, image: './assets/images/image4.jpg', category: 'Category 9' },
      { id: 10, name: 'Item 10', description: 'This is item 10', price: 1000, quantity: 10, image: './assets/images/image5.jpg', category: 'Category 10' },
    ];

    const customers = [
      {id: 1, name: 'Tabitha', location: 'Nairobi'},
      {id: 2, name: 'John', location: 'Nairobi'},
    ]
    return {items, customers};
  }

  // Overrides the genId method to ensure that a item always has an id.
  // If the items array is empty,
  // the method below returns the initial number (11).
  // if the items array is not empty, the method below returns the highest
  // hero id + 1.
  genId(items: Item[]): number {
    return items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 11;
  }

  genId2(cutomers: Customer[]): number {
    return cutomers.length > 0 ? Math.max(...cutomers.map(customer => customer.id)) + 1 : 11;
  }
}