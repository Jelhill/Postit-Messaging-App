import React, { Fragment } from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import nnamdi from "../Images/nnamdi.jpg";

function MessageBoard(props) {
  const { dummyMessages } = props;

  return (
    <Fragment>
      <div className='compo-1'>
        {dummyMessages.map((member, index) => (
          <div className='post' key={index}>
            <Chip
              avatar={<Avatar alt='Memeber-profile' src={nnamdi} />}
              label={member.memberName}
            />
            <p>{member.message}</p>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    dummyMessages: state.UserReducer.dummyMessages,
  };
};

export default connect(mapStateToProps)(MessageBoard);
