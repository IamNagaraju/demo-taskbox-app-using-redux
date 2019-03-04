// ADD_PROJECT
export const addProject = project => {
  return {
    type: 'ADD_PROJECT',
    project,
  };
};

//EDIT_PROJECT
export const editProject = (id, project) => {
  return {
    type: 'EDIT_PROJECT',
    id,
    project,
  };
};

//REMOVE_PROJECT
export const removeProject = id => {
  return {
    type: 'REMOVE_PROJECT',
    id,
  };
};
