import React from 'react'
import Header from "./Header";
import Addmessage from "./Addmessage";
import { Link } from "react-router-dom"


class Dashboard extends React.Component{
  
  render(){
    return( 
      <div className="Container">
         <div className="homepageLeft">
            <div className="logo">
              <img src="logo.png" alt=""/>
              <p className="postit">Postit</p>
            </div>
            <div className="create-channel">
                <p ><Link to={"/createChannel"}className="create">Create Channel</Link></p>
                <p className="add"><Link to="/createChannel">+</Link></p>
            </div>
            <div className="group">
                <p><Link className="one" to={{
                  state: {openModal: this.props.openModal}
                  }}>Software Engineers</Link></p>
                <p><Link className="groups" to="/addPeople"> UX/UI Designers</Link></p>
                <p><Link className="groups" to="/addPeople"> Data Scientists</Link></p>                
            </div>
        </div>
        <div className="Nnamdi">
          <Header />
          <Addmessage />
        </div>
      </div>
    )
  }
}


export default Dashboard;