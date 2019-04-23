import React, { Component } from "react";
import { connect } from "react-redux";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { todo } = this.props;
    return (
      <ul>
        {todo.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    );
  }
}

// export default View;
const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todo
  };
};
export default connect(mapStateToProps)(View);
