import { useState, useEffect } from 'react'
import { React } from 'react'

const SideBar = (props) => {
    // console.log(props.folderNames && props.folderNames)
    
// TOGGLE SIDEBAR
    const [sideBar, setBar] = useState(false)
    const toggleSideBar = () => {setBar(!sideBar)}
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
        <aside className="side-bar" 
        // onMouseOut={(e) => mouseToggle(e.target)}
        >
                {/* <button onClick={(() => toggleSideBar())} className="closeSidebar">x</button> */}
                <div className="slideButton" >
                <button  className={sideBar ? "side-bar-open" : "side-bar-close"} onClick={(() => toggleSideBar())} >{sideBar ? "x" : "open sidebar"}</button>
                </div>
           {sideBar
           ? <div  >    
{/* ABOUT ME */}
            {props.userAboutMe != null && props.edit 
                    ? <form 
                        details={props.userAboutMe} 
                        key={props.currentUser.id} 
                        onSubmit={(e) => props.updateUserAboutMe(e, userAboutMe)}>
                            <input  
                            type="text" 
                            defaultValue={props.userAboutMe} 
                            className="folder-form" 
                                // value={props.userAboutMe}
                                onChange={(e) => changeAboutMe(e.target.value)}
                            ></input>
                        </form>
                    : <p onClick={() => setAboutMeToggle()}>{props.userAboutMe}</p>}
{/* FOLDER TOGGLE */}
                {props.edit && 
                    <div className="add-item" >
                        <p>folders</p>
                        <button onClick={() => {setNewFolder(!newFolder)}} >add folder</button>  
                    </div>}
{/* NEW FOLDER */}
                    { newFolder && props.edit && 
                        <form onSubmit={(e) => props.addFolder(e, folderName)}> 
                        <input type="text" placeholder=" enter folder name" 
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
                        <p>links</p>
                        <button onClick={() => {setNewLink(!newLink)}} >add link</button>  
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
                            className="sidebar-form" value={link.name}
                            onChange={(e) => changeLinkName(e.target.value)}
                            ></input>
{/* LINK URL INPUT */}
                            <input type="text" defaultValue={link.url} 
                            className="sidebar-form" value={link.url}
                            onChange={(e) => {setLinkUrl(e.target.value)}}
                            ></input>
                    </form>)
                    :  props.userLinks.map(link =>
                        <a href={link.url}> {link.name} </a>
                        // <a href="https://example.com/faq.html"> FAQ </a>
                        // <p onClick={(e) => props.clickLink(link.id)} link={link} key={link.id}>{link.name}</p>
                        )}
                 
                {props.userLinks != null && 
                    props.edit
                    ? props.userLinks.map((link) => <form link={link} key={link.id} onSubmit={(e) => props.updatelink(e, linkName, link)}>
                       <input  type="text" defaultValue={link.name} className="link-form" 
                    //    value={link.name}
                            onChange={(e) => changeLinkName(e.target.value)}
                        ></input>
                    </form>)
                    : props.currentUser && props.userLinks.map(link => <p link={link} key={link.id}>{link.name}</p>)} 

                    
             
                
                <p>{props.currentUser && props.currentUser.email}</p>

                {/* <p>use photo portfolio</p>
                <p>download moon widget</p> */}
                {/* {props.userFolders && props.userFolders.map(folder => <p>{folder.name}</p>)} */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={() => logout()} >log out</button>
                <button onClick={() => props.useTemplate(setBar(!sideBar))} >use template</button>
                <p>____ is a visual tool for photographers</p>
            </div>
            : null}
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