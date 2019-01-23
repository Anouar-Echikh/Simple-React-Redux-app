const intialState = { age: 20, history: [] };
const reducer = (state = intialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "AGE_UP":
      return {
        ...state,
        age: state.age + action.val,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.val
        })
      };
      break;

    case "AGE_DOWN":
      return {
        ...state,
        age: state.age - action.val,
        history: state.history.concat({
          id: Math.random(),
          age: state.age - action.val
        })
      };
      break;
    case "RMV_AGE":
      return {
        ...state,

        history: state.history.filter(el => el.id !== action.id)
      };
      break;
    default:
      return newState;
  }
};
export default reducer;
