import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from 'react';
import { useHistory } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Header from './containers/Header'
import SideBar from './containers/SideBar'
import AsideRight from './containers/AsideRight';
import CenterDiv from './containers/CenterDiv'
import UserLoginSignup from './containers/UserLoginSignup'







function App() {
  const [userProfile, setUserProfile] = useState(true) 

  const userTemplate = () => {
    setUserProfile(!userProfile)
  }

  const [currentLogin, setCurrentLogin] = useState()
  const handleCurrentLogin = (userinfo) => {
    setCurrentLogin(userinfo)
  }


  return (
       <div className={"cont"}>
              <SideBar currentLogin={currentLogin} userTemplate={userTemplate} />
        <Header currentLogin={currentLogin} />
              <AsideRight currentLogin={currentLogin} />
        <main>
            {userProfile
            ? <CenterDiv currentLogin={currentLogin} />
            : <UserLoginSignup handleCurrentLogin={handleCurrentLogin} currentLogin={currentLogin} userTemplate={userTemplate} />}
        </main>
        <footer>footer</footer>
    </div>
  );
}

export default App;
