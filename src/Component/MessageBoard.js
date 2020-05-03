import React, { Fragment, useEffect, useRef } from "react";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";


function MessageBoard(props) {
  const { dummyMessages, groupData2, groupName, newMessage } = props;
  const postRef = useRef(null);

  let filteredGroup = []
  !groupName ? 
    filteredGroup = dummyMessages : 
    filteredGroup = groupData2.filter(eachGroup => eachGroup.name === groupName)[0].data
    const groupSelected = newMessage ? filteredGroup.concat(newMessage) : filteredGroup

  useEffect(() => {
    postRef.current.scrollTo(0, postRef.current.scrollHeight);
  }, [groupSelected.length]);
    

  return (
    <Fragment>
          <div className='compo-1' ref={postRef}>
          {groupSelected.map((member, index) => (
            <div className='post' key={index}>
              <Chip
                avatar={
                  <Avatar alt='Memeber-profile' src={member.memberAvatar} />
                }
                label={member.memberName}
              />
              <p>{member.message}</p>
            </div>
          ))
          }
        </div>
    </Fragment>
  );
}

const mapStateToProps = (state) => {

  return {
    dummyMessages: state.dummyMessages,
    groupData2: state.groupData2,
    newMessage: state.newMessage
  };
};

export default connect(mapStateToProps)(MessageBoard);
