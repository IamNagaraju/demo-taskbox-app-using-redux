// ADD_USER
export const addUser = user => {
  return {
    type: 'ADD_USER',
    user,
  };
};

//EDIT_USER
export const editUser = (id, user) => {
  return {
    type: 'EDIT_USER',
    id,
    user,
  };
};

//REMOVE_USER
export const removeUser = id => {
  return {
    type: 'REMOVE_USER',
    id,
  };
};
