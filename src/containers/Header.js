import { useState } from 'react'
import styled from "styled-components";

const Header = (props) => {

    
    const [newUserName, setNewUserName] = useState()
    const changeName = (newUserName) => {setNewUserName(newUserName)}

        return (
            <header>
            {/* <h1 >{props.currentUser ? props.userName : "Memphis Project"}</h1>             */}
            {/* props.currentUser != null && props.userName != null && */}
            {props.edit != true
                ?  <form 
                    name={props.currentUser.name} 
                    key={props.currentUser.id} 
                    onSubmit={(e) => props.nameSubmit(e, newUserName, props.currentUser.id)}>
                        <NameInput  
                        type="text" 
                        defaultValue={props.currentUser.name} 
                            // value={currentUser.name}
                            onChange={(e) => changeName(e.target.value)}
                        ></NameInput>
                </form>
                : <h1 >{props.currentUser ? props.userName : "Image Board"}</h1> 
                    }
            </header>
        )

}

export default Header
const NameInput = styled.input`
  text-align: right; 
  font-size: 2.5rem;
  float: right;
  margin-top: .001rem;
  font-weight: 500;
  line-height: 1;
  box-sizing: border-box;
  display: block;
  color: black;
  margin-block-end: 1em;
  margin-inline-end: 18px;
`