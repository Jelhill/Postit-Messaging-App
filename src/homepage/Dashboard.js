import React from "react";
import Header from "./Header";
import AddMessage from "./AddMessage";
import { Link } from "react-router-dom"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { connect } from "react-redux";


const Dashboard = ({ dispatch, groupData }) => {

  return (
    <div className='Container'>
      <div className='homepageLeft'>
        <div className='logo'>
          <img src='logo.png' alt='' />
          <p className='postit'>Postit</p>
        </div>
        <div className='create-channel'>
          <p>
            <Link className='create'>Create Group</Link>
          </p>
          <p className='add'>
            <Link to='/creategroup'>+</Link>
          </p>
        </div>
        <div className='group'>
          <List>
            {groupData.map((topic, index) => (
              <ListItem key={topic.index} button>
                <ListItemText primary={topic.groups.name} />
              </ListItem>
            ))}
          </List>

        </div>
      </div>
      <div className='Nnamdi'>
        <Header />
        <AddMessage />
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    groupData: state.data,
  };
};
export default connect(mapStateToProps)(Dashboard)
