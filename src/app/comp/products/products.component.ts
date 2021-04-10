import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Product } from '../../product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title: String = "Welcome";
  show = false;
  products: Product[] = [];

  constructor(private productsSrv: ProductsService) {
  }

  async ngOnInit() {
    try {
      this.products = await this.productsSrv.getProducts();
      console.log("Promise", this.products)
    } catch (e) {
      console.log("Error", e)
    }
  }
}
