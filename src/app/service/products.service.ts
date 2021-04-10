import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../product.model';





@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  /**
   * Get all products from www.jsonfy.com/items
   */
  getProducts(): Promise<Product[]> {
    return this.http.get<Product[]>("https://jsonfy.com/items").toPromise();
  }

  /**
   * Gets a product by a given id
   * @param id product id 
   */
  getProduct(id: any): Promise<Product> {
    return this.http.get<Product[]>("https://jsonfy.com/items/" + id).pipe(
      map(r => r[0])
    ).toPromise();
  }

  /**
   * Saves the product
   * @param data the date
   */
  save(data: any): Promise<any> {
    return this.http.post("https://jsonfy.com/items", data).toPromise();
  }
}
