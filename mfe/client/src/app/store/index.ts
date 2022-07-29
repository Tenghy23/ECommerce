import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromShopReducer from './reducers/shop.reducer';


export interface State {
  shopState: fromShopReducer.State,

}

export const reducers: ActionReducerMap<State> = {
  shopState: fromShopReducer.reducer,
};

export const getRootState = createFeatureSelector<State>('shop');

export const getShopState = createSelector(getRootState, (state: State) => state.shopState);

export const getProductBrandState = createSelector(getShopState, fromShopReducer.getProductBrand);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
