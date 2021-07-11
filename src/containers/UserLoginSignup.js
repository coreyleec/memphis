import { useState, useEffect, useRef } from 'react'
import { React } from 'react'
import { useHistory } from "react-router-dom"

const UserLoginSignup = (props) => {

    
    // let history = useHistory();

  
    const login = () => {
        setUserLogin(!userLogin)
        setUserSignUp(false)
    }

    const [userSignUp, setUserSignUp] = useState(false)
    let [photos, setPhotos] = useState([])
    const signupRef = useRef()
    const signupSubmit = e => {
        e.preventDefault()
        const data = new FormData(signupRef.current)
            for (const [k,v] of data){console.log(k,v)}
            // console.log(data)
            fetch(`http://localhost:3000/api/v1/users`, 
            {method: 'POST', body: data })
                .then(res => res.json())
                .then(user => {
                    // setUrl(photo.image)
                    console.log(user)
                    localStorage.token = user.token
                    props.handleCurrentUser(user.user)
                    props.handleUserLinks(user.links)
                    props.handleUserFolders(user.folders)
                    props.handleUserPhotos(user.photos)
                    props.handleUserComments(user.comments)
                    // props.userTemplate()
                    // history.push("/userprofile")
                })
    }

    const [userLogin, setUserLogin] = useState(false)
    const signup = () => {
        setUserSignUp(!userSignUp)
        setUserLogin(false)
    }
    const loginRef = useRef()
    const loginSubmit = e => {
        e.preventDefault()
        const data = new FormData(loginRef.current)
        for (const [k,v] of data){console.log(k,v)}
        // console.log(data)
            fetch(`http://localhost:3000/api/v1/login`, 
            {method: 'POST', body: data })
                .then(res => res.json())
                .then(user => {
                    console.log(user)
                    console.log(user.user)
                    console.log(user.folders)
                    console.log(user.photos)
                    console.log(user.user.id)
                localStorage.token = user.token
                props.handleCurrentUser(user.user)
                props.handleUserLinks(user.links)
                props.handleUserFolders(user.folders)
                // props.handleUserPhotos(user.photos)
                props.handleUserComments(user.comments)
                // props.handleCurrentLogin(user)
                // history.push("/userprofile")
                
                })
    }
// const handleChange = e => {
//     [e.target.name]: [e.target.value]
// }

    return (
        <div>
            <button onClick={() => signup()}>sign up</button>
            <button onClick={() => login()} >login</button>
        {userLogin  
        ?<form  onSubmit={loginSubmit}  ref={loginRef}  >
            {/* <button onClick={() => setUserLogin(!userLogin)} className="closeSidebar">X</button> */}
            {/* <p>login</p> */}
            <input name="name" type="text" placeholder="name" />
            <input name="password" type="password" placeholder="password"/>
            <button type="submit" >submit</button>
        </form>
        : null}
        {userSignUp
        ? <form onSubmit={signupSubmit}  ref={signupRef} >
            {/* <button onClick={() => setUserSignUp(!userSignUp)} className="closeSidebar">X</button> */}
            <p>sign up</p>
            <input name="name" type="name" placeholder="email" />
            <input name="password" type="password" placeholder="password"/>
            <button type="submit" >submit</button>
        </form>
        : null}
        </div>
    )

    

    }
export default UserLoginSignup