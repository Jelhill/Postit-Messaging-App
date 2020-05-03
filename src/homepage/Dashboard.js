import React from "react";
import Header from "./Header";
import AddMessage from "./Addmessage";
import { Link, useParams } from "react-router-dom";
import Groups from "./Groups";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import { connect } from "react-redux";

const Dashboard = () => {
  const { groupName } = useParams();
  console.log({ groupName }, "yeah");

  return (
    <div className='Container'>
      <div className='homepageLeft'>
        <div className='logo'>
          <img src='logo.png' alt='' />
          <p className='postit'>Postit</p>
        </div>
        <div className='create-channel'>
          <p>
            <Link to='' className='create'>
              Create Group
            </Link>
          </p>
          <p className='add'>
            <Link to='/creategroup'>+</Link>
          </p>
        </div>
        <Groups />
      </div>
      <div className='Nnamdi'>
        <Header />
        <AddMessage groupName={groupName} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    groupData: state.groupData,
    groupdata2: state.groupdata2,
  };
};

export default connect(mapStateToProps)(Dashboard);
