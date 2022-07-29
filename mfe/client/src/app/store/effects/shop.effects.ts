import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY, Observable } from 'rxjs';
import { ProductBrand } from 'src/app/models/product-brand';
import { HttpService } from 'src/app/services/http.service';
import { map, switchMap, catchError } from 'rxjs/operators';
import { ProductBrandsSuccess, ShopType } from '../actions/shop.actions';

@Injectable()
export class ShopEffects {
  productBrands$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ShopType.PRODUCT_BRANDS),
      switchMap(() => 
        this.httpService.getProductBrands().pipe(
          map((productBrand: ProductBrand) => new ProductBrandsSuccess(productBrand)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private httpService: HttpService) {}
}
