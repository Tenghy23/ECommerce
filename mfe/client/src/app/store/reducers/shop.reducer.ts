import { Action } from "@ngrx/store";

const initialState = {
    mockDate: undefined
};

export function shopReducer(state = initialState, action: Action) {
    switch (action.type) {
        case 'ADD_INGREDIENT':    
            return {
                ...state,
                mockDate: '123'
            }; 
    }
}