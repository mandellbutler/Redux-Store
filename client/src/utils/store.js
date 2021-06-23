import React, { createContext, useContext, useReducer } from "react";
import { useProductReducer } from './reducers'

//create context
const StoreContext = createContext();
//bring in the context provider
const { Provider } = StoreContext;

// const reducer = ???

//custom provider and make available for use
export const StoreProvider = ({ value = [], ...props }) => {
  //setup state
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};


//custom hook to make context available for use
export const useStoreContext = () => {
  return useContext(StoreContext);
};



