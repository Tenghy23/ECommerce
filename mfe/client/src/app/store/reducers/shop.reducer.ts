import { ProductBrand } from "src/app/models/product-brand";
import { ShopAction } from "../actions/shop.actions";

// not from course
export interface State {
    productBrands: ProductBrand;
}

// not from course
export const initialState: State = {
    productBrands: undefined
};


// not from course
export function reducer(state: State = initialState, action: ShopAction): State {
    switch (action.type) {
        case '[Shop] PRODUCT_BRANDS':    
            return {
                ...initialState,
                productBrands: action.payload
            }; 
    }
}


export const getProductBrand = (state: State) => state.productBrands;