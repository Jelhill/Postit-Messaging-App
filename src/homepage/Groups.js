import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { selectedGroup, getGroupName } from "../actions";
import { Link, useParams } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { groupData } from "../Data/Data";

const Groups = ({ members, groupData2, getGroupName }) => {
  return (
    <div className='group'>
      <List>
        {groupData2.map((group, index) => (
          <Link key={index} to={`/messageBoard/${group.name}`}>
            <ListItem key={index}>
              <ListItemText primary={group.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  // console.log(">>>>", members)
  // const allChats = members;
  // console.log("ALL CHate", Object.keys(allChats))
  // const group = Object.keys(allChats).map((value) => ({
  //   name: members[value]?.name,
  //   key: value,
  // }));
  // const dispatch = useDispatch();
  // return (
  //   <div className='group'>
  //     <List>
  //       {group.map(({ name, key }, index) => (
  //         <ListItem
  //           key={index}
  //           onClick={() => selectedGroup(groupData[key], dispatch)}
  //           button
  //         >
  //           <ListItemText primary={name} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );
};

const mapStateToProps = (state) => {
  return {
    members: state.groupData,
    groupData2: state.groupData2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGroupName: (groupName) => dispatch(getGroupName(groupName)),
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ selectedGroup: selectedGroup }, dispatch);
// };
export default connect(mapStateToProps, mapDispatchToProps)(Groups);
