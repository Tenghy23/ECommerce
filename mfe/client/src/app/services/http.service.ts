import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductBrand } from '../models/product-brand';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  pageUrl: string = 'https://localhost:5001/api/Products/';

  constructor(private http: HttpClient) {}

  getProductBrands(): Observable<ProductBrand> {
    return this.http.get<ProductBrand>(this.pageUrl + 'brands');
  }
}
 