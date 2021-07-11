import { useState, useEffect } from 'react'
import { React } from 'react'
// import MoonPhaseView from 'react-moonphase';


const SideBar = (props) => {
    // console.log(props.folderNames && props.folderNames)
    const [bar, setBar] = useState(false)

    const toggleSideBar = () => {
        setBar(!bar)
    }
    const mouseToggle = () => {
        setBar(!bar)
    }
    const logout = () => {
        localStorage.clear()
        window.location.reload(false)
    }
    const [aboutMe, setAboutMe] = useState(false)
    const toggleAboutMe = () => {
        setAboutMe(!aboutMe)
    }

    return (
        <aside className >
            
           { bar
           ?
           <div>
               {/* <div>
                   
               <MoonPhaseView
            moonPhase={moonPhase}
            onMoonPhaseUpdate={onMoonPhaseUpdate.bind(this)} />
               </div> */}
                <button onClick={(() => toggleSideBar())} className="closeSidebar">x</button>
                {/* <p onCLick={() => setAboutMe()}>about me</p> */}
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
                <button onClick={() => props.useTemplate(setBar(!bar))} >use template</button>
                <p>____ is a visual tool for photographers</p>
            </div>
            : <button onClick={(() => toggleSideBar())} >open sidebar</button>}
        </aside>
    )
}

export default SideBar