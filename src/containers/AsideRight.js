import { React, useEffect, useState} from 'react';
import styled from "styled-components";
// import "..components/ToggleSwitch.css"

// import Switch from "react-switch"


const AsideRight = (props) => {

    
        // const [isToggled, setIsToggled] = useState(false);
        // const onToggle = () => setIsToggled(!isToggled);


    return (
        <aside>
            {props.currentUser.id != null && 
            <Sticky>
            <label className="switch-container">
             <label className="toggle-switch">
            <input type="checkbox" checked={props.edit}
             onChange={props.editToggle} />
            <span className="switch" />
            </label>
            <p>edit</p>
            </label>
            {/* <button onClick={props.reorderSubmit()} >submit reorder</button> */}
            </Sticky>
            }
        </aside>
    )

    

    }
export default AsideRight

const Sticky = styled.div`
position: sticky;
  top: 0;
`