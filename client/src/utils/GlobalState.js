import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext();

const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_POST:
      return console.log(action.type);

    default:
      return state;
  }
};


const StoreProvider ({value = [], ...props} => {
    const [state, dispatch] = useReducer(reducer, {
        user: "",
        post: ""
    })

    return <Provider value={[state, dispatch]} {...props} />;
})

const useStoreContext = () => {
    reutrn useContext(StoreContext)
}

export {StoreProvider, useStoreContext};