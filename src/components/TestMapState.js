import React from 'react';
import { connect } from 'react-redux';

function TestMapState(props) {
  return (
    <>
      <p>Priority Task {props.tasksList[0]?.text}</p>
    </>
  );
}

const mapState = (state) => {
  const { tasks } = state.tasks;
  console.log('mapState', tasks);
  return { tasksList: tasks };
};

export default connect(mapState)(TestMapState);
