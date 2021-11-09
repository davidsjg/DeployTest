const postReducer = (state = "", action) => {
  switch (action.type) {
    case "POST":
      return action.payload;
      break;

    default:
      break;
  }
};
