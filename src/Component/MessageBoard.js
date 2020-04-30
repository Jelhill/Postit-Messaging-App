import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import nnamdi from "../Images/nnamdi.jpg";

function MessageBoard(props) {
    const { dummyMessages } = props

    return (
        <Fragment>
        <div className="compo-1">
          { dummyMessages.map((member, index) => {
            return (
              <div className="sub-compo" key={index}>
                  <div className="post">
                      <img src={nnamdi} alt='user' />
                      <p>{member.memberName}</p>
                  </div>  
                  <p className="message">
                      {member.message}                
                  </p>
              </div>
            )
            })}
          </div>            
        </Fragment>
    )
}

const mapStateToProps = (state) => {  
    return {
      dummyMessages: state.dummyMessages,
    }
}


export default connect(mapStateToProps)(MessageBoard)