import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketItems = [];
  

  constructor() { }

  addItem( product : Product ) {
    const exist = this.basketItems.find((item) => {
      return item === product.id;
    });

    if(exist)
      exist
    else
      this.basketItems.push();

      console.log(this.basketItems)
  }
}
