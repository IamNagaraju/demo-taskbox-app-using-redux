import { createStore, combineReducers } from 'redux';
import projectsReducer from '../reducers/projects';
import usersReducer from '../reducers/users';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      projects: projectsReducer,
      users: usersReducer,
    })
  );
  return store;
};

export default configureStore;
