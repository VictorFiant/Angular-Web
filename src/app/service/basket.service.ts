import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product.model';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BasketService {

  
  items : any[] = [];
  

  constructor(
    private http: HttpClient
  ) {
    
  }

  addToBasket(product : Product) {
    this.items.push(product)
  }
  getItems(){
      return this.items;
  }

  clearBasket(){
      this.items = [];
      return this.items;
  }

   


}

