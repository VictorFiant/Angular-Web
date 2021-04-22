import { Component, NgZone, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { BasketService } from 'src/app/service/basket.service'
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../product.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product : Product ;
  displayedImg = 0;

  constructor(
    private productsSrv: ProductsService,
    private activatedRoute: ActivatedRoute,
    private basketSrv: BasketService,
    private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");

    this.productsSrv.getProduct(id)
      .then(data => {
        this.product = data;
      })
      .catch(e => console.error(e))
  }

  addToBasket(product: Product) {
    this.basketSrv.addToBasket(product);
    window.alert('Your product has been added to the cart!')

  }

}
