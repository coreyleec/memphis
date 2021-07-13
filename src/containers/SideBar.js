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
    const [aboutMe, setAboutMe] = useState(false)
    const toggleAboutMe = () => {
        setAboutMe(!aboutMe)
    }

    
// ADD FOLDER STATE TOGGLE
const [newFolder, setNewFolder] = useState(false)
const newFolderToggle = () => {setNewFolder(!newFolder)}
const [folderName, setFolderName] = useState("")
const changeFolder = (folderName) => {setFolderName(folderName)}

// ADD LINK STATE TOGGLE
const [newLink, setNewLink] = useState(false)
const newLinkToggle = () => {setNewLink(!newLink)}
const [linkName, setLinkName] = useState("")
const changeLink = (linkName) => {setLinkName(linkName)}


    return (
        <aside className="side-bar" 
        // onMouseOut={(e) => mouseToggle(e.target)}
        >
               
           { sideBar
           ? <div  >    
                <button onClick={(() => toggleSideBar())} className="closeSidebar">x</button>
                <p onClick={() => setAboutMe()}>about me</p>
{/* ADD FOLDER TOGGLE */}
                {props.edit && 
                    <div className="add-item" >
                        <p>folders</p>
                        <button onClick={() => {setNewFolder(!newFolder)}} >add folder</button>  
                    </div>}
{/* EDIT FOLDER NAME */}
                {props.userFolders != null && 
                    props.edit && newFolder === true
                    ? props.userFolders.map(folder => 
                    <form 
                        folder={folder} 
                        key={folder.id} 
                        onSubmit={(e) => props.updateFolder(e, folderName, folder)}>
                            <input  
                            type="text" 
                            defaultValue={folder.name} 
                            className="folder-form" 
                                // value={folder.name}
                                onChange={(e) => changeFolder(e.target.value)}
                            ></input>
                    </form>)
                    : props.currentUser && props.userFolders && props.userFolders.map(folder =>
                        <p onClick={(e) => props.chooseFolder(folder.id)} folder={folder} key={folder.id}>{folder.name}</p>)
                        }
{/* ADD LINK FORM */}
                    {props.edit && 
                    <div className="add-item" >
                        <p>links</p>
                        <button>add link</button>  
                    </div>}
{/* NEW LINK FORM */}
                { newLink && props.edit
                && <form onSubmit={(e) => props.addLink(e, linkName)}> <input type="text" placeholder=" enter link name" 
                onChange={(e) => changeLink(e.target.value)}></input> </form>}
                {props.userLinks != null && props.edit
                    ? props.userLinks.map(link => 
                    <form 
                            link={link} 
                            key={link.id} 
                            onSubmit={(e) => props.updatelink(e, linkName, link)}>
                            <input  
                            type="text" 
                            defaultValue={link.name} 
                            className="sidebar-form" 
                                // value={link.name}
                                onChange={(e) => changeLink(e.target.value)}
                            ></input>
                    </form>)
                    : props.currentUser && props.userLinks && props.userLinks.map(link =>
                        <p onClick={(e) => props.clickLink(link.id)} link={link} key={link.id}>{link.name}</p>)
                        }
                 
                {props.userLinks != null && 
                    props.edit
                    ? props.userLinks.map((link) => <form link={link} key={link.id} onSubmit={(e) => props.updatelink(e, linkName, link)}>
                       <input  type="text" defaultValue={link.name} className="link-form" 
                    //    value={link.name}
                            onChange={(e) => changeLink(e.target.value)}
                        ></input>
                    </form>)
                    : props.currentUser && props.userLinks.map(link => <p link={link} key={link.id}>{link.name}</p>)} 

                    
             
                <p> {props.currentUser && props.currentUser.details} </p>
                <p>{props.currentUser && props.currentUser.email}</p>

                <p>use photo portfolio</p>
                <p>download moon widget</p>
                {/* {props.userFolders && props.userFolders.map(folder => <p>{folder.name}</p>)} */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={() => logout()} >log out</button>
                <button onClick={() => props.useTemplate(setBar(!sideBar))} >use template</button>
                <p>____ is a visual tool for photographers</p>
            </div>
            : <button onClick={(() => toggleSideBar())} >open sidebar</button>}
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