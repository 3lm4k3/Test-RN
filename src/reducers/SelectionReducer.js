export default (state = null, action) => {
  switch (action.type) {
    case 'select_tag':
      return action.payload;
    default:
      return state;
  }
};