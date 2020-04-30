import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { selectedGroup } from "../actions";
import { connect, useDispatch } from "react-redux";
import { groupData } from "../Data/Data";

const Groups = ({ members }) => {
  const allChats = members;
  const group = Object.keys(allChats).map((value) => ({
    name: members[value]?.name,
    key: value,
  }));
  const dispatch = useDispatch();
  return (
    <div className='group'>
      <List>
        {group.map(({ name, key }, index) => (
          <ListItem
            key={index}
            onClick={() => selectedGroup(groupData[key], dispatch)}
            button
          >
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    members: state.groupData,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ selectedGroup: selectedGroup }, dispatch);
// };
export default connect(mapStateToProps, null)(Groups);
