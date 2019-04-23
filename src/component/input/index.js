import React, { Component } from "react";
import { connect } from "react-redux";
import todo from "../../store/actions/todo";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handelChangeValue = ({ currentTarget }) => {
    this.setState({
      value: currentTarget.value
    });
  };
  handleSubmit = () => {
    const { value } = this.state;
    const { addTodo } = this.props;
    if (!value.length) return false;
    // alert(value);
    addTodo(value);

    this.setState({
      value: ""
    });
  };
  render() {
    const { value } = this.state;
    console.log(this.props);

    return (
      <div>
        <input type="text" value={value} onChange={this.handelChangeValue} />
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: param => {
      dispatch(todo.addTodo(param));
    }
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    abc: state
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
