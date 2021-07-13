import { useState } from 'react'

const Header = (props) => {

    
        return (
            <header>
            {/* <h1 >{props.currentUser ? props.userName : "Memphis Project"}</h1>             */}
                 {props.currentUser != null && props.userName != null &&
                props.edit
                ?  <form 
                    name={props.currentUser.name} 
                    key={props.currentUser.id} 
                    onSubmit={(e) => props.nameSubmit(e, props.userName, props.currentUser.id)}>
                        <input  
                        type="text" 
                        defaultValue={props.currentUser.name} 
                        className="name-form" 
                            // value={currentUser.name}
                            onChange={(e) => props.changeName(e.target.value)}
                        ></input>
                </form>
                : <h1 >{props.currentUser ? props.userName : "Memphis Project"}</h1> 
                    }
            </header>
        )

}

export default Header