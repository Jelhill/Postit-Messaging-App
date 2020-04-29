import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { connect } from "react-redux";

const Groups = ({ dispatch, groupData }) => {
  return (
    <div className='group'>
      <List>
        {groupData.map((topic, index) => (
          <ListItem key={topic.index} button>
            <ListItemText primary={topic.groups.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    groupData: state.groupData,
  };
};
export default connect(mapStateToProps)(Groups);
