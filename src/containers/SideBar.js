import { useState, useEffect } from 'react'
import { React } from 'react'
// import MoonPhaseView from 'react-moonphase';


const SideBar = (props) => {
    
    const [bar, setBar] = useState(false)

    const toggleSideBar = () => {
        setBar(!bar)
    }
    
    const logout = () => {
        localStorage.clear()
    }
    return (
        <aside>
            
           { bar
           ?
           <div>
               {/* <div>
                   
               <MoonPhaseView
            moonPhase={moonPhase}
            onMoonPhaseUpdate={onMoonPhaseUpdate.bind(this)} />
               </div> */}
                <button onClick={(() => toggleSideBar())} className="closeSidebar">x</button>
                <p>about me</p>
                <p>contact</p>
                <p>use photo portfolio</p>
                <p>download moon widget</p>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={() => logout()} >log out</button>
                <button onClick={() => props.userTemplate()} >use template</button>
                <p>____ is a visual tool for photographers</p>
            </div>
            : <button onClick={(() => toggleSideBar())} >open sidebar</button>}
        </aside>
    )
}

export default SideBar