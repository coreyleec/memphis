import { useState, useEffect } from 'react'
import { React } from 'react'
import SideBarFolder from '../components/SideBarFolder'
import SideBarLinks from '../components/SideBarLinks'
const SideBar = (props) => {
    // console.log(props.folderNames && props.folderNames)
    
// TOGGLE SIDEBAR
    const [sideBar, setBar] = useState(false)
    const toggleSideBar = () => {
        setBar(!sideBar) 
        console.log("betty")}
    // const mouseToggle = (e) => {
    //     console.log(e)
    //     // sideBar === true && e === null && setBar(!sideBar)
    // }
    const logout = () => {
        localStorage.clear()
        window.location.reload(false)
    }
    const [aboutMeToggle, setAboutMeToggle] = useState(false)
    const toggleAboutMe = () => {
        setAboutMeToggle(!aboutMeToggle)
    }
    

// SIDEBAR BUTTON TRANSITION
    const [buttonState, setButtonState] = useState(false)

// ABOUT ME
const [userAboutMe, setUserAboutMe] = useState("") 
const changeAboutMe = (newAboutMe) => {setUserAboutMe(newAboutMe)}

console.log(props.userLinks)
    return (
        <aside  
        // onMouseOut={(e) => mouseToggle(e.target)}
        >
                {/* <button onClick={(() => toggleSideBar())} className="closeSidebar">x</button> */}
                <div className={sideBar ? "slide-button-right" : "slide-button-left" } >
                <button  onClick={(() => toggleSideBar())} >{sideBar ? "x" : "open sidebar"}</button>
                </div>
            <div className={sideBar ? "side-bar-open" : "side-bar-closed"} >    
{/* ABOUT ME */}
            <div className="break"></div>
            <div className="about-me-cont" >
            {props.userAboutMe != null && props.edit 
                    ? <form 
                        details={props.userAboutMe} 
                        key={props.currentUser.id} 
                        onSubmit={(e) => props.updateUserAboutMe(e, userAboutMe)}>
                            <input type="text" 
                            className="sidebar-input"
                            defaultValue={props.userAboutMe} 
                            inputStyle={{color: "#212529"}}
                            placeholder="add a description" 
                        onChange={(e) => changeAboutMe(e.target.value)}></input>
                        </form>
                    : <p style={{cursor: "pointer",fontSize:"1rem", display: "flex", flexStyle: "wrap"}} onClick={() => setAboutMeToggle()}>{props.userAboutMe}</p>}

            </div>
                    <SideBarFolder {...props} />
                    <SideBarLinks {...props}/>
                 
                {/* {props.userLinks != null && 
                    props.edit
                    ? props.userLinks.map((link) => <form link={link} key={link.id} onSubmit={(e) => props.updatelink(e, linkName, link)}>
                       <input  type="text" defaultValue={link.name} className="link-form" 
                    //    value={link.name}
                            onChange={(e) => changeLinkName(e.target.value)}
                        ></input>
                    </form>)
                    : props.currentUser && props.userLinks.map(link => <a href={link.url} link={link} key={link.id}>{link.name}</a>)}  */}

                    
             
                
                {/* <p className="about-me" >{props.currentUser && props.currentUser.email}</p> */}

                {/* <p>use photo portfolio</p>
                <p>download moon widget</p> */}
                {/* {props.userFolders && props.userFolders.map(folder => <p>{folder.name}</p>)} */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>Welcome :)</p>
                <div classname="button-flex" >
                <button onClick={() => logout()} >log out</button>
                <button onClick={() => props.useTemplate(setBar(!sideBar))} >use template</button>
                </div>
                {/* <p>image board is a visual tool for image curation, as well as a digital portfolio template</p> */}
            </div>
            
        </aside>
    )
}

export default SideBar

// const [userFolders, setUserFolders] = useState({...props.userFolders})
    // useEffect(() => {
    //     props.userFolders && setUserFolders(props.userFolders);
    // }, [props.userFolders])
  
   

    // console.log(userFolders)
    // const [folder, setFolder] = useState()