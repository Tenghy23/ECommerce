import { Injectable } from '@angular/core';
import { IProductBrand } from '../models/iproduct-brand';
import { ProductBrand } from '../models/product-brand';

@Injectable({
  providedIn: 'root',
})
export class ModelMapperService {
  constructor() {}

  public convertProductBrand(apiModel: IProductBrand): ProductBrand {
    const productName: ProductBrand = {
      name: apiModel.name,
    };
    return productName;
  }
}
