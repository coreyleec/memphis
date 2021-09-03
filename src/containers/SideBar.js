import { useState, useEffect } from 'react'
import { React } from 'react'
import SideBarFolder from '../components/SideBarFolder'
import SideBarLinks from '../components/SideBarLinks'
import AboutMe from '../components/AboutMe'
import styled from "styled-components";


const SideBar = (props) => {
    // console.log(props.folderNames && props.folderNames)
    
// TOGGLE SIDEBAR
    const [sideBar, setBar] = useState(false)
    const toggleSideBar = () => {
        setBar(!sideBar) 
        console.log("betty")}
 
    const logout = () => {
        localStorage.clear()
        window.location.reload(false)
    }
    
// SIDEBAR BUTTON TRANSITION
    const [ButtonState, setButtonState] = useState(false)



console.log(props.userLinks)
    return (
        <aside  
        // onMouseOut={(e) => mouseToggle(e.target)}
        >
                {/* <Button onClick={(() => toggleSideBar())} className="closeSidebar">x</Button> */}
                <div className={sideBar ? "slide-button-right" : "slide-button-left" } >
                <button  onClick={(() => toggleSideBar())} >{sideBar ? "x" : "open sidebar"}</button>
                </div>
            <div className={sideBar ? "side-bar-open" : "side-bar-closed"} >    


            
                    <AboutMe {...props} />
                    <SideBarFolder {...props} />
                    <SideBarLinks {...props}/>
                 
               

                    
             
                
                {/* <p className="about-me" >{props.currentUser && props.currentUser.email}</p> */}

                {/* <p>use photo portfolio</p>
                <p>download moon widget</p> */}
                {/* {props.userFolders && props.userFolders.map(folder => <p>{folder.name}</p>)} */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>Welcome :)</p>

                {props.currentUser == "" 
                ? <Button onClick={() => props.useTemplate(setBar(!sideBar))} >use template</Button> 
                : <Button onClick={() => logout()} >log out</Button>}

                {/* <p>image board is a visual tool for image curation, as well as a digital portfolio template</p> */}
            </div>
            
        </aside>
    )
}

export default SideBar



const Button = styled.button`     
    align-items: flex-end;

`


// const [userFolders, setUserFolders] = useState({...props.userFolders})
    // useEffect(() => {
    //     props.userFolders && setUserFolders(props.userFolders);
    // }, [props.userFolders])
  
   

    // console.log(userFolders)
    // const [folder, setFolder] = useState()