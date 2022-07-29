import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ShopSandBox } from 'src/app/store/sandbox/shop.sandbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: Product;
  
  constructor(private shopSandBox: ShopSandBox) { }

  ngOnInit(): void {
    this.shopSandBox.getProductBrand();
  }
}
