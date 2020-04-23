import React from 'react'
import Header from "./Header";
import Addmessage from "./Addmessage";


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
            <p className="create">Create Channel</p>
            <p className="add">+</p>
        </div>

        <div className="group">
            <p className=" one"> Software Engineers</p>
            <p className="groups"> UX/UI Designers</p>
            <p className="groups"> Data Scientists</p>
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