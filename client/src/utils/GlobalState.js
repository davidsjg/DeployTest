// // import React, { createContext, useReducer, useContext } from "react";
// // import { SET_POST } from "./actions";

// // const StoreContext = createContext();

// // const { Provider } = StoreContext;

// // const reducer = (state, action) => {
// //   switch (action.type) {
// //     case SET_POST:
// //       return {
// //         ...state,
// //         user: action.user,
// //         post: action.post,
// //       };

// //     default:
// //       return state;
// //   }
// // };

// // const StoreProvider = ({ value = [], ...props }) => {
// //   const [state, dispatch] = useReducer(reducer, {
// //     user: "",
// //     post: "",
// //   });

// //   return <Provider value={[state, dispatch]} {...props} />;
// // };

// // const useStoreContext = () => {
// //   return useContext(StoreContext);
// // };

// // export { StoreProvider, useStoreContext };

// import React, { createContext, useReducer, useContext } from "react";
// import { SET_POST } from "../actions";

// // export const SET_CURRENT_RECIPE = "GET_RECIPE";
// // export const GET_RECIPE = "GET_RECIPE";
// // export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
// // export const LOADING = "LOADING";

// //creating store context
// const StoreContext = createContext();
// //deconstructing Provider from StoreContext
// const { Provider } = StoreContext;

// //Defining our recipe reducer
// const reducer = (state, action) => {
//   {
//     console.log(action.user);
//     console.log(action.post);
//     console.log(action.type);
//   }
//   switch (action.type) {
//     case SET_POST:
//       return {
//         ...state,
//         user: action.user,
//         post: action.post,
//       };

//     default:
//       return state;
//   }
// };

// //setup StoreProvider
// const StoreProvider = ({ value = [], ...props }) => {
//   const [state, dispatch] = useReducer(reducer, {
//     user: "",
//     post: "",
//   });

//   return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
