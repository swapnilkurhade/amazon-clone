import { act } from "react";

export const initialState = {
    basket : [],
    user : null
}



export const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state, basket: [...state.basket, action.item ]
            }

        case 'REMOVE_FROM_BASKET':

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            let newBasket = [...state.basket];

            if(index >= 0){
                newBasket.splice(index, 1)
            }else{
                console.log('cant remove...');
            }

            return {
                ...state,
                basket: newBasket
            }

            // return {
            //     ...state,
            //     basket: state.basket.filter(item => item.id !== action.id)
            // }
        case 'SET_USER':
            return {
                ...state, user : action.user
            }

        case 'EMPTY_BASKET' :
            return {...state, basket: []}

        default:
            return state;
    }
}