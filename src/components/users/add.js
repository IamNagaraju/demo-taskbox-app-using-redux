import React from 'react';
import UserForm from './form';
import { connect } from 'react-redux';
import { stat } from 'fs';
import { addUser } from '../../actions/users';
const UserAdd = props => {
  console.log(props);
  return (
    <div>
      ADD User
      <UserForm
        handleSubmit={user => {
          props.dispatch(addUser(user));
          props.history.push('/users');
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(UserAdd);
