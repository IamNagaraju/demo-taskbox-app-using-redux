import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import ProjectList from './components/projects/list';
import Dashboard from './components/dashboard/index';
import ProjectAdd from './components/projects/add';
import ProjectShow from './components/projects/show';
import ProjectEdit from './components/projects/edit';
import UserList from './components/users/list';
import UserAdd from './components/users/add';
import UserShow from './components/users/show';
import UserEdit from './components/users/edit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>Task Box</h2>
          <ul>
            <li>
              {' '}
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/users">users</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/projects" exact component={ProjectList} />
            <Route path="/projects/new" component={ProjectAdd} exact />
            <Route path="/projects/:id" component={ProjectShow} exact />
            <Route path="/projects/edit/:id" exact component={ProjectEdit} />
            <Route path="/users" exact component={UserList} />
            <Route path="/users/new" exact component={UserAdd} exact />
            <Route path="/users/:id" component={UserShow} exact />
            <Route path="/users/edit/:id" exact component={UserEdit} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
