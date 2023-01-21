

const reducer = (state = 'dark', action) => {
  switch (action.type) {
    case 'dark':
      return 'dark';
      break;
    case 'light':
      return 'light';
      break;
    default:
      return state;
  }
}

export default reducer;