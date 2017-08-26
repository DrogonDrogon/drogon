const reducer = (state, action) => {
  // console.log('reducer running --> state is:', state, ' && action is:', action);
  switch (action.type) {
    case 'RECEIVE_PHOTOTAGS':
      // console.log('ACTION.PHOTOTAGS IS', action.phototags);
      return Object.assign({}, state, { phototags: action.phototags });

    case 'IS_POSTING':
      return Object.assign({}, state, { isPosting: action.payload });

    case 'SET_USER':
      return Object.assign({}, state, { user: action.payload });

    default:
      return state;
  }
};

export default reducer;
