import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext(null);
const CartDispatchContext = createContext(null);

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD": 
            return [...state, action.product]
        case "REMOVE":
            const newArr = [...state];
            newArr.splice(action.index, 1);
            return newArr;
        default:
            throw new Error(`unknown action ${action.type}`);
    }
}


export default function ReducerProvider({children}) {
    const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
        <CartStateContext.Provider value={state}>
            {children}
        </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = () => useContext(CartDispatchContext);