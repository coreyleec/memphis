import React from 'react'
import { Component } from 'react';
import { useState, useEffect } from 'react'
import styled from "styled-components";


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
                        <button className="side-bar-add-button" onClick={() => {setNewFolder(!newFolder)}} >+</button>}
                    </div>
{/* NEW FOLDER */}
            { newFolder && props.edit && 
                        <form onSubmit={(e) => props.addFolder(e, props.folderName)}> 
                        <StyledInput type="text" placeholder="folder name" 
                        onChange={(e) => setFolderName(e.target.value)}></StyledInput> </form>}
{/* EDIT FOLDER NAME */}
            {props.userFolders != null && props.edit 
                    ? props.userFolders.map(folder =>
                        <form folder={folder} key={folder.id} 
                            onSubmit={(e) => props.updateFolder(e, folderName, folder)}>
                                <StyledInput type="text" 
                                defaultValue={folder.name} 
                                className="folder-form" 
                                // value={folder.name}
                                onChange={(e) => setFolderName(e.target.value)}
                                ></StyledInput>
                        </form>)
                    : props.currentUser && props.userFolders && props.userFolders.map(folder => <StyledP onClick={(e) => props.chooseFolder(folder.id)} key={folder.id}>{folder.name}</StyledP>)
                        }
        </div>
    )
}

export default SideBarFolder

const StyledInput = styled.input`
font-size: 2rem;
padding: 0px;
line-height: 1.5;
      text-align: left;
      width: 240px;
      color: #757575;
`
const StyledP = styled.p`
    font-size: 2rem;
      text-align: left;
      width: 240px;
      color: black;
      margin-bottom: 0px;
      cursor: pointer;
`