import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ProjectList = props => {
  console.log(props);
  return (
    <div>
      <h2>Listing Projects - {props.projects.length}</h2>
      <ul>
        {props.projects.map((project, index) => (
          <li key={index}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/projects/new">Add Project</Link>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    projects: state.projects,
    // THis projects are available to projectLIst props
    // what ever we pass that will be available for projectlist fucntions
  };
};

export default connect(mapStateToProps)(ProjectList);
