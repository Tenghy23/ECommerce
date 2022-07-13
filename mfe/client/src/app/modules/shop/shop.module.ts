import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../../store/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
})
export class ShopModule {}
