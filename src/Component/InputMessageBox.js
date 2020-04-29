import React , {Fragment} from 'react'
import { connect } from "react-redux"
import { getTypedMessage, postMessage } from "../actions"

function InputMessageBox(props) {
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
                    onChange={(e) => props.getTypedMessage(e.target.value)}
                    />
                    <button className='input-group-text' id='basic-addon' 
                        onClick={(e) => {
                        e.preventDefault()
                        props.postMessage(props.userTypedMessage)
                        }}>
                    <span><i className="fa fa-paper-plane"></i></span>
                    </button>
                    <button className='input-group-text' id='basic-addon'>
                        <span><i className="fa fa-paperclip"></i></span>
                    </button>
                </div>
            </form>
            
        </Fragment>
    )    
}

const mapStateToProps = (state) => {  
    return {
      user: state.users,
      groupData: state.groupData,
      dummyMessages: state.dummyMessages,
      userTypedMessage: state.userTypedMessage
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
      getTypedMessage: (typedMessage) => dispatch(getTypedMessage(typedMessage)),
      postMessage: (typedMessage) => dispatch(postMessage(typedMessage))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(InputMessageBox);
  