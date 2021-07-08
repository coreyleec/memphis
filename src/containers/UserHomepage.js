import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useRef } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { useHistory } from "react-router-dom"
// import Header from './Header'
// import SideBar from './SideBar'
// import AsideRight from './AsideRight';
import CenterDiv from './CenterDiv'
import UserLoginSignup from './UserLoginSignup'



const UserHomepage = (props) => {



  const [userProfile, setUserProfile] = useState(true) 

  const userTemplate = () => {
    setUserProfile(!userProfile)
  }

// SIDEBAR
const [bar, setBar] = useState(false)

const toggleSideBar = () => {
    setBar(!bar)
}

const logout = () => {
    localStorage.clear()
}

  return (
       <div className={"cont"}>
          <aside>
                  
                  {bar
                  ?
                  <div>
                      {/* <div>
                          
                      <MoonPhaseView
                  moonPhase={moonPhase}
                  onMoonPhaseUpdate={onMoonPhaseUpdate.bind(this)} />
                      </div> */}
                      <button onClick={(() => toggleSideBar())} className="closeSidebar">x</button>
                      <p>about me</p>
                      <p>contact</p>
                      <p>use photo portfolio</p>
                      <p>download moon widget</p>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <button onClick={() => logout()} >log out</button>
                      <button onClick={() => props.userTemplate()} >use template</button>
                      <p>____ is a visual tool for photographers</p>
                  </div>
                  : <button onClick={(() => toggleSideBar())} >open sidebar</button>}
        </aside>
        <header>
                  <h1 >Corey Lee</h1>            
        </header>
        <aside></aside>
        <main>
        {userProfile
            ? <CenterDiv currentLogin={props.currentLogin} />
            : <UserLoginSignup handleCurrentLogin={props.handleCurrentLogin} currentLogin={props.currentLogin} userTemplate={props.userTemplate} />}
        </main>
        <footer></footer>
    </div>
  )
}

export default UserHomepage;