const projectsIntialState = [];

const projectsReducer = (state = projectsIntialState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.project];
    case 'REMOVE_PROJECT':
      return state.filter(project => project.id !== action.id);
    case 'EDIT_PROJECT':
      return state.map(project => {
        if (project.id === action.id) {
          return { ...project, ...action.project };
        } else {
          return project;
        }
      });
    default:
      return state;
  }
};
export default projectsReducer;
