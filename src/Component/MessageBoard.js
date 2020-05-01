import React, { Fragment, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import nnamdi from "../Images/nnamdi.jpg";

function MessageBoard(props) {
  const { dummyMessages, selectedGroup } = props;
  const postRef = useRef(null);
  useEffect(() => {
    postRef.current.scrollTo(0, postRef.current.scrollHeight);
    console.log(postRef);
  }, [dummyMessages.length]);

  return (
    <Fragment>
      {selectedGroup ? (
        <div className='compo-1' ref={postRef}>
          {selectedGroup.data.map((member, index) => (
            <div className='post' key={index}>
              <Chip
                avatar={
                  <Avatar alt='Memeber-profile' src={member.memberAvatar} />
                }
                label={member.memberName}
              />
              <p>{member.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className='compo-1' ref={postRef}>
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
      )}
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    dummyMessages: state.dummyMessages,
    selectedGroup: state.selectedGroup,
  };
};

export default connect(mapStateToProps)(MessageBoard);
