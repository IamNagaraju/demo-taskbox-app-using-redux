const userIntialState = [];

const usersReducer = (state = userIntialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.user];
    case 'REMOVE_USER':
      return state.filter(user => user.id !== action.id);
    case 'EDIT_USER':
      return state.map(user => {
        if (user.id === action.id) {
          return { ...user, ...action.user };
        } else {
          return user;
        }
      });
    default:
      return state;
  }
};
export default usersReducer;
