import { useState, useEffect, useRef } from 'react'
import { React } from 'react'
import { useHistory } from "react-router-dom"

const UserLoginSignup = (props) => {

    
    const [userSignUp, setUserSignUp] = useState(false)
    const login = () => {
        setUserLogin(!userLogin)
        setUserSignUp(false)
    }
    const [userLogin, setUserLogin] = useState(false)
    const signup = () => {
        setUserSignUp(!userSignUp)
        setUserLogin(false)
    }

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
                .then(userObj => {
                    // setUrl(photo.image)
                    console.log(userObj)
                    localStorage.token = userObj.token
                    props.handleCurrentLogin(userObj.token)
                })
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
                  .then(userObj => {
                    localStorage.token = userObj.token
                    props.handleCurrentLogin(userObj)}
                  )
      }

//       localStorage.token = user.token
//       if(localStorage.token != "undefined") {
//           // this.props.history.push(`/userhomepage/${user.id}`)
//               let userinfo = user.user 

//               this.props.handleCurrentLogin(userinfo)
//               this.props.history.push("/userhomepage/")

//       }else {
//           alert("try one more time")
//       }
//   })

//   // this.props.history.push("/userhomepage")
// }
      
      

   


    

// const handleChange = e => {
//     [e.target.name]: [e.target.value]
// }

    return (
        <div>
            <button onClick={() => signup()}>use template</button>
            <button onClick={() => login()} >sign in</button>
        {userLogin  
        ?<form  onSubmit={loginSubmit}  ref={loginRef}  >
            {/* <button onClick={() => setUserLogin(!userLogin)} className="closeSidebar">X</button> */}
            <p>login</p>
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