import React from 'react';
import uuidv1 from 'uuid/v1';

class ProjectForm extends React.Component {
  state = {
    id: this.props.project ? this.props.project.id : uuidv1(),
    name: this.props.project ? this.props.project.name : '',
    description: this.props.project ? this.props.project.description : '',
    status: this.props.project ? this.props.project.status : 'open',
  };
  //
  handleSubmit = e => {
    e.preventDefault();
    let formData = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description,
    };
    this.props.handleSubmit(formData);
    this.setState({
      id: '',
      name: '',
      description: '',
    });
  };

  handleNameChange = e => {
    const name = e.target.value;
    this.setState({
      name,
    });
  };

  handleDescription = e => {
    const description = e.target.value;
    this.setState({ description });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>
          <br />
          <label>
            description
            <textarea
              value={this.state.description}
              onChange={this.handleDescription}
            />
          </label>
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default ProjectForm;
