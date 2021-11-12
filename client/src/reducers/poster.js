const postReducer = (state = 0, action) => {
  switch (action.type) {
    case "SET_POST":
      return {
        recipe: action.recipe,
      };

      break;

    default:
      return state;
  }
};

export default postReducer;
