import React from 'react'
import { Component } from 'react';
import { useState, useEffect } from 'react'
import styled from "styled-components";


const SideBarFolder = (props) => {
// ADD FOLDER STATE TOGGLE
const [newFolder, setNewFolder] = useState(false)
const newFolderToggle = () => {setNewFolder(!newFolder)}
const [folderName, setFolderName] = useState("")
const [selectedFolder, setSelectedFolder] = useState(false)

const submitCloseForm = (e) => {
    props.addFolder(e, folderName) 
    setNewFolder(!newFolder)
}
const [clickedFolder, setClickedFolder] = useState()
const [folderToggle, setFolderToggle] = useState(true)
const underlineFolder = (folder) => {
    // setChosenFolder(folder.id)
    setClickedFolder(folder)
     setFolderToggle(!folderToggle)
    console.log(folder)
}
// props.folderShown
// onClick={() => {setNewFolder(!newFolder)}} 
    return (
        <div>
{/* FOLDER TOGGLE */}
                    <div className="add-item" >
                        <p style={{"fontStyle": "italic"}} >folders</p>
            {props.edit && 
                        <button className="side-bar-add-button" onClick={() => {setNewFolder(!newFolder)}} >+</button>}
                    </div>
{/* NEW FOLDER */}
                <div>
            { newFolder && props.edit && 
                        <form onSubmit={(e) => submitCloseForm(e)}
                        
                        > 
                        <StyledInput type="text" placeholder="folder name" 
                        onChange={(e) => setFolderName(e.target.value)}></StyledInput> </form>}
</div>

{/* EDIT FOLDER NAME */}
            {props.userFolders != null && props.edit 
                    ? props.userFolders.map(folder =>   
                    <div className="subtract-item" key={folder.id} folder={folder}>
                        <form folder={folder} key={folder.id} 
                            onSubmit={(e) => props.updateFolder(e, folderName, folder)}
                            >
                                <StyledInput type="text" 
                                defaultValue={folder.name} 
                                // className="folder-form"
                                onChange={(e) => setFolderName(e.target.value)}
                                >

                                </StyledInput>
                        </form>
                        <SubtractButton 
                        onClick={() => props.deleteFolder(folder)} >-</SubtractButton>
                        </div>
)
                    : props.currentUser && props.userFolders && props.userFolders.map(folder => <StyledP key={folder.id} style={ folder.id === clickedFolder ? {textDecoration: "underline"} : null} 
                        clickedFolder={clickedFolder} folderShown={props.folderShown} folderToggle={folderToggle}  onClick={(event) => {props.chooseFolder(folder.id); underlineFolder(folder.id)}} >{folder.name}</StyledP>)
                        }
        </div>
    )
}

export default SideBarFolder
 
const SubtractButton = styled.button`
background-color: transparent;
  border: none;
  font-size: 2rem;
  color: red;
  line-height: 0px;
  padding: 0;
  transform: scale(2, 1);
`

const StyledInput = styled.input`
font-size: 2rem;
padding: 0px;
float: left;
line-height: 1.5;
      text-align: left;
      width: 85%;
      color: #757575;
`
const StyledP = styled.p`
    font-size: 2rem;
      text-align: left;
      width: 85%;
      color: black;
      margin-bottom: 0px;
      cursor: pointer;
    
}

      /* :nth-child(2) a {
  overflow: hidden;
} */

/* ::after {
  opacity 1;
  transform: translate3d(-100%, 0, 0);
}

:hover::after,
:focus::after{
  transform: translate3d(0, 0, 0);
} */

`