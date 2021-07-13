import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState, useRef, forwardRef, useImperativeHandle} from 'react';
import { Modal , Button} from 'react-bootstrap'
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd'
// import { useHistory } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Header from './containers/Header'
import SideBar from './containers/SideBar'
import AsideRight from './containers/AsideRight';
import UserLoginSignup from './containers/UserLoginSignup'
import Test from './components/Test'

const App = () => {
  // OPEN LOGIN
  const [userProfile, setUserProfile] = useState(true) 
  //TRANSITIONS FROM LOGIN TO USER PHOTOS
  const useTemplate = () => {
    setUserProfile(!userProfile)
  }

  const [currentUser, setCurrentUser] = useState("")
  
  const [userPhotos, setUserPhotos] = useState([])
  const [userComments, setUserComments] = useState(null)
  
  
  const handleCurrentUser = (user) => {
    setCurrentUser(user)
    user != null && setUserProfile(!userProfile)
  }
  console.log(currentUser.id)
  
  
  // const handleUserPhotos = (userData) => {
  //   setUserPhotos(userData.sort((a,b) => a.id - b.id))
  // }
  const handleUserComments = (userData) => {
    setUserComments(userData)
  }

// LOGIN 
const [name, setName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const handleName = (name) => {setName(name)}
const handleEmail = (email) => {setEmail(email)}
const handlePassword = (password) => {setPassword(password)}

const loginSubmit = e => {
  e.preventDefault()
  // console.log(data)
      fetch(`http://localhost:3000/api/v1/login`, {
        method: 'POST', 
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          name: name,
          password: password,
        })
      })
          .then(res => res.json())
          .then(user => {
             console.log(user)

          setUserProfile(!userProfile)
          localStorage.token = user.token
          setCurrentUser(user.user)
          setUserName(user.user.name)
          setUserLinks(user.links)
          setUserFolders(user.folders)
          setPhotos(user.photos)
          // setFolderIds(user.folders.map(folder => folder.id))
          setUserComments(user.comments)
          // history.push("/userprofile")
          // console.log(folderIds[0])
          })
}

const signupSubmit = e => {
  e.preventDefault()
      // console.log(data)
      fetch(`http://localhost:3000/api/v1/users/`, {
      method: 'POST', 
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({
        name: name,
        email: email, 
        password: password,

      })
     })
          .then(res => res.json())
          .then(user => {
              console.log(user)
              localStorage.token = user.token
              setCurrentUser(user.user)
              setUserLinks(user.links)
              setUserFolders(user.folders)
              setPhotos(user.photos)
              setUserComments(user.comments)
              setUserProfile(!userProfile)
              // history.push("/userprofile")
          })
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


// FOLDERS //

const [folderDetais, setFolderDetails] = useState()
const [folderLink, setFolderLink] = useState()
const handleFolderLink = (url) => {
  setFolderLink(url)
}
const [folderNames, setFolderNames] = useState()
const [folderIds, setFolderIds] = useState()
const [userFolders, setUserFolders] = useState([1])
const handleUserFolders = (userData) => {
  setUserFolders(userData)}
      
const updateFolder = (e, folderName, folder) => {
      e.preventDefault()
      console.log(e)
      console.log(folder)
      console.log(folder.id)
      console.log(folderName)
      fetch(`http://localhost:3000/api/v1/folders/${folder.id}`, {
          method: 'PATCH'
          , headers: {
              Authorization: `Bearer ${localStorage.token}`,
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: folderName,
            // details: folderDetais, 
            // link: folderLink,
            // user_id: currentUser.id
      })
    })
      .then(res => res.json())
      .then(folderObj => {
        console.log(folderObj)
        setUserFolders( userFolders.map(folder => {
          if(folder.id === folderObj.id) return folderObj
          else return folder
        })
      )}
    )
  }

const addFolder = (e, folderName) => {
    e.preventDefault()
    console.log(e)
    // console.log(folder)
    // console.log(folder.id)
    console.log(folderName)
    fetch(`http://localhost:3000/api/v1/folders/`, {
        method: 'POST'
        , headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: folderName,
          details: "add a description" , 
          link: folderLink ,
          user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(folderObj => {
      console.log(folderObj)
      setUserFolders([...userFolders, folderObj])
      }
    )
  }
  console.log(userFolders)


// LINKS //
    
    const [linkDetais, setLinkDetails] = useState()
    const [link, setLink] = useState()
    const handleLink = (url) => {setLink(url)}

    const [userlink, setUserLink] = useState()
    const handleUserLink = (userData) => {
      setUserLink(userData)}
      
    const clickLink = (link) => {
      console.log(link)
    }

      const [linkNames, setLinkNames] = useState()
      const [linkIds, setLinkIds] = useState()
      const [userLinks, setUserLinks] = useState([1])

    const handleUserLinks = (linkName, linkUrl) => {
        setLinkNames(linkName)
        setLink(linkUrl)
      }
    const updateLink = (e, linkName, link) => {
          e.preventDefault()
          console.log(e)
          console.log(link)
          console.log(link.id)
          console.log(linkName)
          fetch(`http://localhost:3000/api/v1/links/${link.id}`, {
              method: 'PATCH'
              , headers: {
                  Authorization: `Bearer ${localStorage.token}`,
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                name: linkName,
                // details: linkDetais, 
                // link: ink,
                // user_id: currentUser.id
          })
        })
          .then(res => res.json())
          .then(linkObj => {
            console.log(linkObj)
            setUserLink( userLinks.map(link => {
              if(link.id === linkObj.id) return linkObj
              else return link
            })
          )}
        )
      }

    const addLink = (e, linkName) => {
        e.preventDefault()
        console.log(e)
        // console.log(link)
        // console.log(link.id)
        console.log(linkName)
        fetch(`http://localhost:3000/api/v1/links/`, {
            method: 'POST'
            , headers: {
                Authorization: `Bearer ${localStorage.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              name: linkName,
              details: "add a description" , 
              link: link ,
              user_id: currentUser.id
          })
        })
        .then(res => res.json())
        .then(linkObj => {
          console.log(linkObj)
          setUserLink([...userLinks, linkObj])
          }
        )
      }
      console.log(userLinks)


// EDIT USER NAME
const [userName, setUserName] = useState()
const changeName = () => {
  setUserName()
}
const nameSubmit = (e, newName, userId) => {
  e.preventDefault()
  // console.log(data)
      fetch(`http://localhost:3000/api/v1/login`, {
        method: 'PATCH', 
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          name: newName,
        })
      })
        .then(res => res.json())
        .then(nameObj => {
            setUserName(nameObj)
        })
}


// ADD PHOTO
const [photos, setPhotos] = useState()

const [url, setUrl] = useState()
const [details, setDetails] = useState()
// const [name, setName] = useState()

// const handleName = (data) => {setName(data)}  
// const handleUrl = (data) => {setUrl(data)}
// const handleDetails = (data) => {setDetails(data)}  

const addPhoto = (e, photo) => {
    e.preventDefault()
    console.log(e)
    console.log(photo)
    fetch(`http://localhost:3000/api/v1/photos/${photo.id}`, {
        method: 'PATCH'
        , headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            url: url,
            details: details,
            user_id: photo.user_id
        })
    })
    .then(res => res.json())
    .then(photoObj => {
      console.log(photoObj)
      setPhotos( photos.map(photo => {
        if(photo.id === photoObj.id) return photoObj
        else return photo
      })
    )
  }
)      
}
/// MODAL 

      const [openModalForm, setOpenModalForm] = useState(false)
      const [openPhoto, setOpenPhoto] = useState(false)
      const [photo, setPhoto] = useState()
      const modalToggle = (photo) => {                
      //function fires depending on whether picture frames that are empty
            setPhoto(photo)
            photo.url != null 
          ? setOpenPhoto(!openPhoto)
          : setOpenModalForm(!openModalForm)
      }
      const handleClick = (photo) => {
        setPhoto(photo)
        console.log(photo)
      }

// CHOOSE FOLDER
      let folderIndex = 0
      const [folderShown, setFolderShown] = useState(folderIndex)

      const [folderId, setFolderId] = useState()
      let userFolderIds = (userFolders.map(folder => folder.id)) 
      const chooseFolder = (folderId) => {
            let clickedFolderIndex = userFolderIds.findIndex(folderId)
            // setFolderId(folderId)
            setFolderShown(clickedFolderIndex)
            console.log(clickedFolderIndex)
            console.log(userFolderIds)
      }
      // const [folderId, setFolderId] = useState(null)
// TOGGLE FOLDER
    
// EDIT TOGGLE
        const [edit, setEdit] = useState(false)
        const handleEdit = () => {
          setEdit(!edit)
        }


// DRAG AND DROP
    const onChange = (sourceId, sourceIndex, targetIndex, targetId) => {
      const nextState = swap(photos, sourceIndex, targetIndex);
      setPhotos(nextState);
    }

  return (
    <Router>

       <div className={"cont"}>
        <SideBar  
              edit={edit}
              addFolder={addFolder}
              chooseFolder={chooseFolder}
              userFolders={userFolders}
              // changeFolder={changeFolder}
              updateFolder={updateFolder}
              addLink={addLink}
              userLinks={userLinks}
              clickLink={clickLink}
              // changeFolder={changeFolder}
              updateLink={updateLink}
              currentUser={currentUser} useTemplate={useTemplate}
              />
        <Header currentUser={currentUser} userName={userName} edit={edit} nameSubmit={nameSubmit}   changeName={changeName} />
              <AsideRight handleEdit={handleEdit} currentUser={currentUser} />
        <main>
{/* GRID STARTS HERE */}
          { userProfile
          ? <article>
                {/* <div className="container" >
                <Test userPhotos={userPhotos} folderIds={folderIds}  edit={edit} currentUser={currentUser.id} userFolders={userFolders} folderId={folderId}/>
                </div> */}
                
                <div className="container" >
      <GridContextProvider className="array"  
              onChange={onChange}>
                <GridDropZone
                  className="grid" id="photos"
                  boxesPerRow={7} rowHeight={100}
                  style={{ height: "780px" }}
                >
          {/* {photos != null && photos.map(photo => ( */}
            {photos != null && photos.filter(photos => photos.folder_id = userFolderIds[folderShown]).map( photo =>
            <GridItem  className={photo.url != null
              ? "picture" : "emptyBox"} key={photo.id}>
              
              <img 
              // onClick={() => handleClick(photo)}
              onClick={(() => modalToggle(photo))}
                className="photo"
                loading="lazy"
              onDragStart={(e) => {e.preventDefault()}}
              src={photo.url}
              className="photo"
                style={{
                  // resizeMode: "contain",
                  // width: "100%",
                  // height: "100%",
                  // margin: "",
                  // padding: "10px",
                }}
              />
              
            </GridItem>
          )
          }
          
        </GridDropZone>
        {/* {placeholder} */}
      </GridContextProvider>
          {openModalForm ? 
            <Modal key="key"
            // animation={false}
            show={openModalForm} 
            onHide={modalToggle}
            
             data-backdrop="static"
        >
            <Modal.Header>
                <button  
                className="modalBtn"  
                onClick={() => setOpenModalForm(!openModalForm)}
                >X</button>
{/* FORM START */}
            </Modal.Header>
            
            <form 
            onSubmit={(e) => addPhoto(e, photo, setOpenModalForm(!openModalForm))}                    
            >
                <input 
                type="text"
                name="name"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type="text"
                name="details"
                placeholder="details"
                onChange={(e) => setDetails(e.target.value)}
                />
                <input 
                type="text"
                name="image"
                placeholder="url"
                onChange={(e) => setUrl(e.target.value)}
                />
                <button type="submit">ENTER</button>
            </form>
                <p></p>

        </Modal> : null}
{/* PHOTO MODAL */}
    {openPhoto ? 
            <Modal className="modal"
            show={openPhoto}  
            onHide={modalToggle}
            data-toggle="modal" data-backdrop="static" data-keyboard="false"
        >
            <Modal.Header>
                <button  className="modalBtn"  
                onClick={() => setOpenPhoto(!openPhoto)}
                >X</button>
                </Modal.Header> 
                <p>{photo.name}</p>
                <img 
                
                src={photo.url}></img>
                <p>{photo.comments}</p>
                </Modal> 
                : null}
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
            signupSubmit={signupSubmit}
            loginSubmit={loginSubmit}
            setUserProfile={setUserProfile} 
            useTemplate={useTemplate} 
            handleCurrentUser={handleCurrentUser} 
            handleUserLinks={handleUserLinks}
            handleUserFolders={handleUserFolders}
            

            // handleUserPhotos={handleUserPhotos}
            handleUserComments={handleUserComments}
            handleEmail={handleEmail}
            handleName={handleName}
            handlePassword={handlePassword}
            currentUser={currentUser} 
            useTemplate={useTemplate} />}
        </main>
            <footer>
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








// { newLink && props.edit
//   && <form onSubmit={(e) => props.addLink(e, linkName)}> <input type="text" placeholder=" enter link name" 
//   onChange={(e) => changeLink(e.target.value)}></input> </form>}
//   {props.userLinks != null && props.edit
//       ? props.userLinks.map(link => 
//       <form 
//               link={link} 
//               key={link.id} 
//               onSubmit={(e) => props.updatelink(e, linkName, link)}>
//               <input  
//               type="text" 
//               defaultValue={link.name} 
//               className="sidebar-form" 
//                   // value={link.name}
//                   onChange={(e) => changeLink(e.target.value)}
//               ></input>
//       </form>)
//       : props.currentUser && props.userLinks && props.userLinks.map(link =>
//           <p onClick={(e) => props.clickLink(link.id)} link={link} key={link.id}>{link.name}</p>)
//           }
   
//   {props.userLinks != null && 
//       props.edit
//       ? props.userLinks.map((link) => <form link={link} key={link.id} onSubmit={(e) => props.updatelink(e, linkName, link)}>
//          <input  type="text" defaultValue={link.name} className="link-form" 
//       //    value={link.name}
//               onChange={(e) => changeLink(e.target.value)}
//           ></input>
//       </form>)
//       : props.currentUser && props.userLinks.map(link => <p link={link} key={link.id}>{link.name}</p>)} 