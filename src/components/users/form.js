import React from 'react';
import uuid from 'uuid';

class UserForm extends React.Component {
  state = {
    id: this.props.user ? this.props.user.id : uuid(),
    userName: this.props.user ? this.props.user.userName : '',
    userEmail: this.props.user ? this.props.user.userEmail : '',
    userMobile: this.props.user ? this.props.user.userMobile : '',
  };
  handleUserName = e => {
    let userName = e.target.value;
    this.setState({ userName });
  };
  handleEmail = e => {
    let userEmail = e.target.value;
    this.setState({ userEmail });
  };
  handleMobileChange = e => {
    let userMobile = e.target.value;
    this.setState({ userMobile });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { id, userName, userEmail, userMobile } = this.state;
    const formData = { id, userName, userEmail, userMobile };
    // console.log(formData);
    this.props.handleSubmit(formData);
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            name
            <input
              type="text"
              value={this.state.userName}
              onChange={this.handleUserName}
              name="name"
            />
          </label>
          <br />
          <label>
            email
            <input
              type="email"
              value={this.state.userEmail}
              onChange={this.handleEmail}
              name="email"
            />
          </label>
          <br />
          <label>
            Mobile
            <input
              type="number"
              value={this.state.userMobile}
              onChange={this.handleMobileChange}
              name="number"
            />
          </label>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default UserForm;
