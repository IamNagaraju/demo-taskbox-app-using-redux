import React from 'react';
import ProjectForm from './form';
import { addProject } from '../../actions/projects';
import { connect } from 'react-redux';

const ProjectAdd = props => {
  return (
    <div>
      <h2>Add Project</h2>
      <ProjectForm
        handleSubmit={project => {
          // console.log(props);
          props.dispatch(addProject(project));
          props.history.push('/projects');
        }}
      />
    </div>
  );
};

export default connect()(ProjectAdd);
