import React from 'react';
import UserForm from './form';
import { connect } from 'react-redux';
import { editUser } from '../../actions/users';

const EditUser = props => {
  return (
    <div>
      {console.log(props)}
      <h2>Edit User</h2>
      <UserForm
        user={props.users}
        handleSubmit={user => {
          props.dispatch(editUser(user.id, user));
          props.history.push(`/users/${user.id}`);
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    users: state.users.find(user => user.id === props.match.params.id),
  };
};

export default connect(mapStateToProps)(EditUser);
