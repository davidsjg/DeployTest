const initialState = [
  {
    poster: "sup yall",
    user: "ah yeah",
  },
];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POST":
      return {
        state: action.poster,
      };

      break;

    default:
      return state;
  }
};

export default postReducer;
