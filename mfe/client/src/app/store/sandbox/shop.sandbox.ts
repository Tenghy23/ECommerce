import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ProductBrand } from "src/app/models/product-brand";
import { ProductBrands } from "../actions/shop.actions";
import * as fromShopStore from '../index';

@Injectable({
    providedIn: 'root',
})
export class ShopSandBox {
    public readonly productBrand$: Observable<ProductBrand>;

    constructor(private store: Store<fromShopStore.State>) {
        this.productBrand$ = this.store.pipe(select(fromShopStore.getProductBrandState));
    }

    getProductBrand() {
        this.store.dispatch(new ProductBrands(undefined));
    }
}