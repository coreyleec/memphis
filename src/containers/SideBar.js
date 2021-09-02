import { useState, useEffect } from 'react'
import { React } from 'react'

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


    
// ADD FOLDER STATE TOGGLE
const [newFolder, setNewFolder] = useState(false)
const newFolderToggle = () => {setNewFolder(!newFolder)}
const [folderName, setFolderName] = useState("")
const changeFolder = (folderName) => {setFolderName(folderName)}

// ADD LINK STATE TOGGLE
const [newLink, setNewLink] = useState(false)
const newLinkToggle = () => {setNewLink(!newLink)}
const [linkName, setLinkName] = useState("")
const changeLinkName = (linkName) => {setLinkName(linkName)}
const [linkUrl, setLinkUrl] = useState()

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
{/* FOLDER TOGGLE */}
                {props.edit && 
                    <div className="add-item" >
                        <p className="add-item-p">folders</p>
                        <button className="side-bar-add-button" onClick={() => {setNewFolder(!newFolder)}} >+</button>  
                    </div>}
{/* NEW FOLDER */}
                    { newFolder && props.edit && 
                        <form onSubmit={(e) => props.addFolder(e, folderName)}> 
                        <input type="text" placeholder="folder name" 
                        onChange={(e) => setFolderName(e.target.value)}></input> </form>}
{/* EDIT FOLDER NAME */}
                {props.userFolders != null && props.edit 
                    ? props.userFolders.map(folder => 
                        <form folder={folder} key={folder.id} 
                            onSubmit={(e) => props.updateFolder(e, folderName, folder)}>
                                <input type="text" 
                                defaultValue={folder.name} 
                                className="folder-form" 
                                // value={folder.name}
                                onChange={(e) => changeFolder(e.target.value)}
                                ></input>
                        </form>)
                    : props.currentUser && props.userFolders && props.userFolders.map(folder => <p onClick={(e) => props.chooseFolder(folder.id)} folder={folder} key={folder.id}>{folder.name}</p>)
                        }
{/* LINK FORM TOGGLE */}
                    {props.edit && 
                        <div className="add-item" >
                            <p className="add-item-p" >links</p>
                            <button className="side-bar-add-button" onClick={() => {setNewLink(!newLink)}} >+</button>  
                        </div>}
{/* NEW LINK FORM */}
                { newLink && props.edit && <form type="submit" onSubmit={(e) => props.addLink(e, linkName, linkUrl)}> 
                        <input type="text" placeholder=" enter link name" 
                        onChange={(e) => changeLinkName(e.target.value)}></input> 
                        <input type="text" placeholder=" enter link url" 
                        onChange={(e) => changeLinkName(e.target.value)}></input> 
                </form>
                }
{/* EDIT LINK */}
                {props.userLinks != undefined && props.userLinks != null && props.edit
                    ? props.userLinks.map(link => 
                    <form link={link} key={link.id}                             
                            onSubmit={(e) => props.updatelink(e, linkName, linkUrl)}>
{/* LINK NAME INPUT*/}
                            <input type="text" defaultValue={link.name} 
                            className="sidebar-form" 
                            // value={link.name}
                            onChange={(e) => changeLinkName(e.target.value)}
                            ></input>
{/* LINK URL INPUT */}
                            <input type="text" defaultValue={link.url} 
                            className="sidebar-form" 
                            // value={link.url}
                            onChange={(e) => {setLinkUrl(e.target.value)}}
                            ></input>
                    </form>)
                    :  <div className="link-cont">
                        {props.userLinks.map(link =>
                        <a href={link.url}> {link.name} </a>)}
                        </div>
                        // <a href="https://example.com/faq.html"> FAQ </a>
                        // <p onClick={(e) => props.clickLink(link.id)} link={link} key={link.id}>{link.name}</p>
                        }
                 
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