import React from 'react';
// import { connect } from 'net';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeProject } from '../../actions/projects';

const ProjectShow = props => {
  return (
    <div>
      <h2>{props.project.name}</h2>
      <p>
        {props.project.description} - {props.project.id}
      </p>
      <button
        onClick={() => {
          const confirmDelete = window.confirm('Are you sure ?');
          if (confirmDelete) {
            props.dispatch(removeProject(props.project.id));
            props.history.push('/projects');
          }
        }}
      >
        Remove
      </button>
      {/* {console.log(props.project.id)} */}
      <Link to={`/projects/edit/${props.project.id}`}>edit</Link>
      <br />
      <Link to="/projects">back</Link>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    project: state.projects.find(
      project => project.id === props.match.params.id
    ),
  };
};

export default connect(mapStateToProps)(ProjectShow);
