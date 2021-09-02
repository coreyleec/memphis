import React from 'react'
import { useState, useEffect } from 'react'

const SideBarFolder = (props) => {
// ADD FOLDER STATE TOGGLE
const [newFolder, setNewFolder] = useState(false)
const newFolderToggle = () => {setNewFolder(!newFolder)}
const [folderName, setFolderName] = useState("")
const changeFolder = (folderName) => {setFolderName(folderName)}

    return (
        <div>
{/* FOLDER TOGGLE */}
                    <div className="add-item" >
                        <p>folders</p>
            {props.edit && 
                        <button className="side-bar-add-button" onClick={() => {props.setNewFolder(!props.newFolder)}} >+</button>}
                    </div>
{/* NEW FOLDER */}
            { props.newFolder && props.edit && 
                        <form onSubmit={(e) => props.addFolder(e, props.folderName)}> 
                        <input type="text" placeholder="folder name" 
                        onChange={(e) => props.setFolderName(e.target.value)}></input> </form>}
{/* EDIT FOLDER NAME */}
            {props.userFolders != null && props.edit 
                    ? props.userFolders.map(folder =>
                        <form folder={folder} key={folder.id} 
                            onSubmit={(e) => props.updateFolder(e, props.folderName, folder)}>
                                <input type="text" 
                                defaultValue={folder.name} 
                                className="folder-form" 
                                // value={folder.name}
                                onChange={(e) => props.changeFolder(e.target.value)}
                                ></input>
                        </form>)
                    : props.currentUser && props.userFolders && props.userFolders.map(folder => <p onClick={(e) => props.chooseFolder(folder.id)} folder={folder} key={folder.id}>{folder.name}</p>)
                        }
        </div>
    )
}

export default SideBarFolder

