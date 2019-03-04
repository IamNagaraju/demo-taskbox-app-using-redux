import React from 'react';
import { connect } from 'react-redux';
import { removeUser } from '../../actions/users';
import { Link } from 'react-router-dom';

const UserShow = props => {
  return (
    <div>
      <p>userName- {props.users.userName}</p>
      <p>email - {props.users.userEmail}</p>
      <p>mobile- {props.users.userMobile}</p>
      <Link to={`/users/edit/${props.users.id}`}>edit</Link>
      <button
        onClick={() => {
          props.dispatch(removeUser(props.users.id));
          props.history.push('/users');
        }}
      >
        Remove
      </button>
      <Link to="/users">back</Link>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    users: state.users.find(user => user.id, props.match.params.id),
  };
};

export default connect(mapStateToProps)(UserShow);
