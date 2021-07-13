import { React, useEffect, useState} from 'react';
// import "..components/ToggleSwitch.css"

// import Switch from "react-switch"


const AsideRight = (props) => {




    
        const [isToggled, setIsToggled] = useState(false);
        const onToggle = () => setIsToggled(!isToggled);


    return (
        <aside>
            <label className="switch-container">
             <label className="toggle-switch">
            <input type="checkbox" checked={props.edit} onChange={props.handleEdit} />
            <span className="switch" />
            </label>
            <p>edit</p>
            </label>
        </aside>
    )

    

    }
export default AsideRight