import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getTypedMessage, postMessage, reset } from "../actions";

class InputMessageBox extends Component {

  handleTypedMessage = (input) => {
    this.props.getTypedMessage(input)
  }

  handlePostMessage = (userInput) => {
    this.props.postMessage(userInput)
  }

  render() {
  return (
    <Fragment>
      <form className='addmessage'>
        <div className='medialine'>
          <input
            type='text'
            className='form-control'
            placeholder='Type your message here...'
            aria-label='Type your message here...'
            aria-describedby='basic-addon'
            onChange={(e) => this.handleTypedMessage(e.target.value)}
            value={this.props.userTypedMessage}
          />
          <button
            className='input-group-text'
            id='basic-addon'
            onClick={(e) => {
              e.preventDefault();
              this.handlePostMessage(this.props.userTypedMessage);  
            }}
          >
            <span>
              <i className='fa fa-paper-plane'></i>
            </span>
          </button>
          <button className='input-group-text' id='basic-addon'>
            <span>
              <i className='fa fa-paperclip'></i>
            </span>
          </button>
        </div>
      </form>
    </Fragment>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users,
    groupData: state.groupData,
    dummyMessages: state.dummyMessages,
    userTypedMessage: state.userTypedMessage,
    valueReset: state.valueReset
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTypedMessage: (typedMessage) => dispatch(getTypedMessage(typedMessage)),
    postMessage: (typedMessage) => dispatch(postMessage(typedMessage))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputMessageBox);
