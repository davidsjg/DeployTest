const postReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_POST":
      return state + 1;
      break;

    default:
      return state;
  }
};

export default postReducer;
