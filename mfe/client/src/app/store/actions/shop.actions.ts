import { Action } from '@ngrx/store';
import { ProductBrand } from 'src/app/models/product-brand';

// not from course
export interface ShopAction extends Action {
    payload: any;
}

// not from course
export enum ShopType {
  PRODUCT_BRANDS = '[Shop] PRODUCT_BRANDS',
  PRODUCT_BRANDS_SUCCESS = '[Shop] PRODUCT_BRANDS_SUCCESS',

}

// not from course
export class ProductBrands implements ShopAction {
  readonly type = ShopType.PRODUCT_BRANDS;
  constructor(public payload: undefined) {}
}

// not from course
export class ProductBrandsSuccess implements ShopAction {
  readonly type = ShopType.PRODUCT_BRANDS_SUCCESS;
  constructor(public payload: ProductBrand) {}
}

