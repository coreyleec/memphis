import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState, useRef, forwardRef, useImperativeHandle} from 'react';
import { Modal , Button} from 'react-bootstrap'
// import { useHistory } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Header from './containers/Header'
import SideBar from './containers/SideBar'
import AsideRight from './containers/AsideRight';
import CenterDiv from './containers/CenterDiv'
// import Photogrid from './containers/PhotoGrid'
import UserLoginSignup from './containers/UserLoginSignup'
import PhotoGrid from './containers/PhotoGrid';
import Grid from './components/Grid'
import Test from './components/Test'

const App = () => {
  // OPEN LOGIN
  const [userProfile, setUserProfile] = useState(true) 
  const useTemplate = () => {
    setUserProfile(!userProfile)
  }

  const [currentUser, setCurrentUser] = useState("")
  // const [user, setUser] = useState(null)
  const [userFolders, setUserFolders] = useState(null)
  // const [userPhotos, setUserPhotos] = useState([])
  const [userComments, setUserComments] = useState(null)
  const [userLinks, setUserLinks] = useState(null)
  
  
  const handleCurrentUser = (user) => {
    setCurrentUser(user)
    user != null && setUserProfile(!userProfile)
  }
  console.log(currentUser.id)

  const handleUserLinks = (userData) => {
    setUserLinks(userData)
  }
  const handleUserFolders = (userData) => {
    setUserFolders(userData)
  }
  const [folderNames, setFolderNames] = useState()
  const handleFolderNames = () => {
    setFolderNames(userFolders.map(folder => folder.name))
  }
  // const handleUserPhotos = (userData) => {
  //   setUserPhotos(userData.sort((a,b) => a.id - b.id))
  // }
  const handleUserComments = (userData) => {
    setUserComments(userData)
  }

  

          

                // let createFrame = () => {
                //   fetch(`http://localhost:3000/api/v1/photos/`, {
                //       method: "POST",
                //       headers: {
                //         "Content-Type": "application/json"
                //       },
                //       body: JSON.stringify({
                //         name: null,
                //         details: null,
                //         url: null, 
                //       })
                //     })
                //     .then(resp => resp.json())
                //     .then(photoObjs => setUserPhotos(...userPhotos, photoObjs)
                //     )
                //   }


                const handleDrag = (photo) => {
                  photo.url != null && console.log(photo)
                  
                }
                const handleDrop = (photo) => {
                  console.log(photo)
                 }
// DELETE
const [practice, setPractice] = useState(true)
      
const [edit, setEdit] = useState(false)

const handleEdit = () => {
  setEdit(!edit)
}

  return (
    <Router>

       <div className={"cont"}>
        <SideBar  
              edit={edit}
              folderNames={folderNames}
              userFolders={userFolders}
              currentUser={currentUser} useTemplate={useTemplate} />
        <Header currentUser={currentUser} edit={edit} />
              <AsideRight handleEdit={handleEdit} currentUser={currentUser} />
        <main>
          { 
          // practice
          userProfile
          ? <article>
           <div className="container" >
             <Test edit={edit} currentUser={currentUser.id} />
            </div>
            </article>
            // <Grid/>
            // :userProfile
            // // ? <Route exact path="/userprofile" component={(props) => (
            //   ? <PhotoGrid 
            //   addPhoto={addPhoto}
            //   handleDrag={handleDrag}
            //   handleDrop={handleDrop}
            //   handleName={handleName} handleUrl={handleUrl} handleDetails={handleDetails}
              
            //   userPhotos={userPhotos} 
            //   currentUser={currentUser.id} />
            //   // updateFrame={updateFrame} 
            //   // )} />
            : <UserLoginSignup 
            setUserProfile={setUserProfile} 
            useTemplate={useTemplate} 
            handleCurrentUser={handleCurrentUser} 
            handleUserLinks={handleUserLinks}
            handleUserFolders={handleUserFolders}
            // handleUserPhotos={handleUserPhotos}
            handleUserComments={handleUserComments}
            currentUser={currentUser} 
            useTemplate={useTemplate} />}
        </main>
            <footer>
              <button onClick={() => {setPractice(!practice)}}></button>
            </footer>
        </div>
        
      </Router>
  );
}

export default App;

{/* <Route exact path="/home" component={(props) => (
       <div className={"cont"}>
              <SideBar currentUser={currentUser} useTemplate={useTemplate} />
        <Header currentUser={currentUser} />
              <AsideRight currentUser={currentUser} />
        <main>
            {userProfile
            ? <Route exact path="/userprofile" component={(props) => (
              <CenterDiv  {...props} currentUser={currentUser} />)} />
            : <UserLoginSignup setUserProfile={setUserProfile} handleCurrentUser={handleCurrentUser} currentUser={currentUser} useTemplate={useTemplate} />}
        </main>
            <footer>footer</footer>
        </div>
        )}/> */}




         // const onlyFolderNames = () => {
  //   userFolders != null && let folderNames = userFolders.filter(folder => folder.name)
  // }
  // let folderNames = userFolders != null && userFolders.derive(folder => folder.name)
  

//   const updateFrame = (e) => {
//     e.preventDefault()
//     console.log(e)
//     fetch(`http://localhost:3000/api/v1/photos/${photo.id}`, {
//         method: 'PATCH'
//         , headers: {
//             Authorization: `Bearer ${localStorage.token}`,
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             name: "",
//             url: imageRef.current.value,
//             details: detailRef.current.value,
//     })
// })
//     .then(res => res.json())
//     .then(photoObj => {
//         setCurrentPhoto(photoObj)
//         console.log(photoObj)
//         console.log(imageRef.current.value)}
//         // (updatedBox) => {
//         //     setUrl(photo.image)
//         //     setDetails(photo.details)
//         // }
//     )
// }