import { useState } from 'react'

const Header = (props) => {

    
        return (
            <header>
            <h1 >{props.currentUser ? props.currentUser.name : "Memphis Project"}</h1>            
            </header>
        )

}

export default Header