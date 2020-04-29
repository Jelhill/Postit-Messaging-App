import React from "react";
import Header from "./Header";
import Addmessage from "./Addmessage";
import { Link } from "react-router-dom"
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import MessageDisplay from "./MessageDisplay";
import { connect } from "react-redux";


// class Dashboard extends React.Component{
  
//   render(){
//     return( 
//       <div className="Container">
//          <div className="homepageLeft">
//             <div className="logo">
//               <img src="logo.png" alt=""/>
//               <p className="postit">Postit</p>
//             </div>
//             <div className="create-channel">
//                 <p ><Link to={"/createChannel"}className="create">Create Channel</Link></p>
//                 <p className="add"><Link to="/createChannel">+</Link></p>
//             </div>
//             <div className="group">
//                 <p><Link className="one" to={{
//                   state: {openModal: this.props.openModal}
//                   }}>Software Engineers</Link></p>
//                 <p><Link className="groups" to="/addPeople"> UX/UI Designers</Link></p>
//                 <p><Link className="groups" to="/addPeople"> Data Scientists</Link></p>                
//             </div>
//         </div>
//         <div className="Nnamdi">
//           <Header />
//           <Addmessage />



export const Dashboard = ({ dispatch, groupData }) => {
  console.log(groupData);
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
        <Addmessage />
        {/* <MessageDisplay /> */}
      </div>
    </div>
  );
};



{/* export default Dashboard; */}

const mapStateToProps = (state) => {
  return {
    groupData: state.data,
  };
};
export default connect(mapStateToProps)(Dashboard)
