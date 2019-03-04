import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const UserList = props => {
  return (
    <div>
      <h2>Listing Users</h2>
      <ul>
        {props.users.map((user, index) => {
          return (
            <li key={index}>
              <Link to={`/users/${user.id}`}>{user.userName}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/users/new">Add User</Link>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(UserList);
