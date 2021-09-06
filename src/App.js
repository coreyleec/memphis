import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Modal, Button } from "react-bootstrap";
import {
  GridContextProvider,
  GridDropZone,
  GridItem,
  swap,
} from "react-grid-dnd";
// import { useHistory } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
// import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Header from "./containers/Header";
import SideBar from "./containers/SideBar";
import AsideRight from "./containers/AsideRight";
import UserLoginSignup from "./containers/UserLoginSignup";
import Test from "./components/Test";

const App = () => {
  // OPEN LOGIN
  const [userProfile, setUserProfile] = useState(true);
  //TRANSITIONS FROM LOGIN TO USER PHOTOS
  const useTemplate = () => {
    setUserProfile(!userProfile);
  };

  const [currentUser, setCurrentUser] = useState("");
  const [users, setUsers] = useState([]);
  const [userPhotos, setUserPhotos] = useState([]);
  const [userComments, setUserComments] = useState(null);

  const handleCurrentUser = (user) => {
    setCurrentUser(user);
    user != null && setUserProfile(!userProfile);
  };
  console.log(currentUser.id);

  // const handleUserPhotos = (userData) => {
  //   setUserPhotos(userData.sort((a,b) => a.id - b.id))
  // }
  const handleUserComments = (userData) => {
    setUserComments(userData);
  };

  // LOGIN
  const [userId, setUserId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleName = (name) => {
    setName(name);
  };
  const handleEmail = (email) => {
    setEmail(email);
  };
  const handlePassword = (password) => {
    setPassword(password);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    // console.log(data)
    fetch(`http://localhost:3000/api/v1/login`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);

        setUserProfile(!userProfile);
        localStorage.token = user.token;
        setUserId(user.id);
        setCurrentUser(user.user);
        setUserName(user.user.name);
        setUserEmail(user.user.email);
        setUserAboutMe(user.user.details);
        setUserLinks(user.links);
        setUserFolders(user.folders);
        setPhotos(user.photos);
        setUserComments(user.comments);
        // setFolderIds(user.folders.map(folder => folder.id))
        // history.push("/userprofile")
        // console.log(folderIds[0])
      });
  };
  // console.log(userPhotos)
  const signupSubmit = (e) => {
    e.preventDefault();
    // console.log(data)
    fetch(`http://localhost:3000/api/v1/users/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((user) => {
        console.log(user);
        localStorage.token = user.token;
        setCurrentUser(user.user);
        setUserLinks(user.links);
        setUserFolders(user.folders);
        setPhotos(user.photos);
        setUserComments(user.comments);
        setUserProfile(!userProfile);
        // history.push("/userprofile")
      });
  };

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

  const [folderDetais, setFolderDetails] = useState();
  const [folderLink, setFolderLink] = useState();
  const handleFolderLink = (url) => {
    setFolderLink(url);
  };
  const [folderNames, setFolderNames] = useState();
  const [folderIds, setFolderIds] = useState();
  const [userFolders, setUserFolders] = useState([1]);
  const handleUserFolders = (userData) => {
    setUserFolders(userData);
  };

  const updateFolder = (e, folderName, folder) => {
    e.preventDefault();
    console.log(e);
    console.log(folder);
    console.log(folder.id);
    console.log(folderName);
    fetch(`http://localhost:3000/api/v1/folders/${folder.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: folderName,
        // details: folderDetais,
        // link: folderLink,
        // user_id: currentUser.id
      }),
    })
      .then((res) => res.json())
      .then((folderObj) => {
        console.log(folderObj);
        setUserFolders(
          userFolders.map((folder) => {
            if (folder.id === folderObj.id) return folderObj;
            else return folder;
          })
        );
      });
  };

  const addFolder = (e, folderName) => {
    e.preventDefault();
    console.log(e);
    // console.log(folder)
    // console.log(folder.id)
    console.log(folderName);
    fetch(`http://localhost:3000/api/v1/folders/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: folderName,
        details: "add a description",
        link: folderLink,
        user_id: currentUser.id,
      }),
    })
      .then((res) => res.json())
      .then((folderObj) => {
        console.log(folderObj);
        setUserFolders([...userFolders, folderObj]);
      });
  };
  // console.log(userFolders)

  // LINKS //

  const [linkDetais, setLinkDetails] = useState();
  const [link, setLink] = useState();
  const handleLink = (url) => {
    setLink(url);
  };

  const clickLink = (link) => {
    console.log(link);
  };

  const [linkNames, setLinkNames] = useState();
  const [linkIds, setLinkIds] = useState();
  const [userLinks, setUserLinks] = useState([]);
  // console.log(userLinks)
  const handleUserLinks = (linkName, linkUrl) => {
    setLinkNames(linkName);
    setLink(linkUrl);
  };


  const addLink = (e, linkName, linkUrl) => {
    e.preventDefault();
    console.log("hello");
    console.log(e)
    console.log(linkName)
    console.log(linkUrl)

    fetch(`http://localhost:3000/api/v1/links/`, {
        method: 'POST'
        , headers: {
            Authorization: `Bearer ${localStorage.token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: linkName,
          details: "add a description" ,
          url: linkUrl ,
          user_id: currentUser.id
      })
    })
    .then(res => res.json())
    .then(linkObj => {
      console.log(linkObj)
      setUserLinks([...userLinks, linkObj])
      }
    )
  };
  // console.log(userLinks)

  const updateLink = (e, linkName, link) => {
    e.preventDefault();
    console.log(e);
    console.log(link);
    console.log(link.id);
    console.log(linkName);
    fetch(`http://localhost:3000/api/v1/links/${link.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: linkName,
        // details: linkDetais,
        // link: ink,
        // user_id: currentUser.id
      }),
    })
      .then((res) => res.json())
      .then((linkObj) => {
        console.log(linkObj);
        setUserLinks(
          userLinks.map((link) => {
            if (link.id === linkObj.id) return linkObj;
            else return link;
          })
        );
      });
  };

  const sayHello = () => {
    console.log("hello");
  };


  // EDIT USER INFO
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userAboutMe, setUserAboutMe] = useState("");

  // EDIT TOGGLE
  const [edit, setEdit] = useState(false);

  const editToggle = () => {
    setEdit(!edit);
  };

  const handleEdit = (e) => {
    console.log("hello");
  };

  const updateUserAboutMe = (e, aboutMe) => {
    e.preventDefault();
    fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        details: aboutMe,
      }),
    })
      .then((res) => res.json())
      .then((userObj) => {
        console.log(userObj.details);
        setUserAboutMe(userObj.details);
      });
  };

  const nameSubmit = (e, newName) => {
    e.preventDefault();
    console.log(e, newName, userId);
    fetch(`http://localhost:3000/api/v1/users/${currentUser.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newName,
        // user_id: userId,
      }),
    })
      .then((res) => res.json())
      .then((userObj) => {
        console.log(userObj);
        setUserName(userObj.name);
      });
  };

  // ADD PHOTO
  const [photos, setPhotos] = useState();

  const [url, setUrl] = useState();
  const [details, setDetails] = useState();
  // const [name, setName] = useState()

  // const handleName = (data) => {setName(data)}
  // const handleUrl = (data) => {setUrl(data)}
  // const handleDetails = (data) => {setDetails(data)}

  // const newPets = this.state.pets.map((soloPet) => soloPet.id === id ? {...soloPet, isAdopted: !soloPet.isAdopted} : soloPet)
  const addPhoto = (e, photo) => {
    // updatePhoto = (e, photoObj) => {
    // e.preventDefault()
    // const oldPhoto = photos.find(photo => photo.id)

    // const oldIndex = photos.indexOf(oldPhoto)

    // const updatePhoto = {...oldPhoto, name: newPhoto.name, url:newPhoto.url, details: newPhoto.details}
    //   console.log(updateLikes)
    // }

    e.preventDefault();
    console.log(e);
    console.log(photo);
    fetch(`http://localhost:3000/api/v1/photos/${photo.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        url: url,
        details: details,
        user_id: photo.user_id,
      }),
    })
      .then((res) => res.json())
      .then((photoObj) => {
        console.log(photoObj);
        setPhotos(
          photos.map((photo) => {
            if (photo.id === photoObj.id) return photoObj;
            else return photo;
          })
        );
      });
  };

  // const updatePhotoOrder = (e, folderId) => {
  //   e.preventDefault()
  //   console.log(e)
  //   console.log(folderId)
  //   fetch(`http://localhost:3000/api/v1/folders/${folderId}`, {
  //       method: 'PATCH'
  //       , headers: {
  //           Authorization: `Bearer ${localStorage.token}`,
  //           "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({
  //           name: name,
  //           url: url,
  //           details: details,
  //           user_id: photo.user_id
  //       })
  //   })
  //   .then(res => res.json())
  //   .then(setUserFolders( userFolders.map(folder => {
  //       if(folder.id === folderObj.id) return folderObj
  //       else return folder
  //     })
  //   )
  // }
  // )
  // }

  // CHOOSE FOLDER
  let folderIndex = 0;
  const [folderShown, setFolderShown] = useState(folderIndex);

  const [folderId, setFolderId] = useState();
  let userFolderIds = userFolders.map((folder) => folder.id);

  // TOGGLE FOLDER

  const [folderToggle, setFolderToggle] = useState(false);
  const handleFolderToggle = () => {};
  // DELETE REQUEST
  // deletePhoto = (photoObj) => {
  //   let updatedPhotos = photos.filter(photo => photo.id !== photoObj.id)
  //   fetch(`http://localhost:3000/photos/${photoObj.id}`, { method: 'DELETE' })
  //     .then(resp => resp.json())
  //     .then(() => setPhotos(updatedPhotos))
  // }

  // deleteFolder = (folderObj) => {
  //   let newFolders = folders.filter(folder => folder.id !== folderObj.id)
  //   fetch(`http://localhost:9292/reminders/${folderObj.id}`, { method: 'DELETE' })
  //     .then(resp => resp.json())
  //     .then(() => setUserFolders(updatedFolders))
  // }
  const chooseFolder = (folderId) => {
    fetch(`http://localhost:3000/api/v1/folders/${folderId}/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((folder) => {
        console.log("folder", folder);
        setPhotos(folder.photos);
        setFolderToggle(true);
      });
  };

  // DRAG AND DROP

  // useEffect(() => {
  //     edit && const onChange = (sourceId, sourceIndex, targetIndex, targetId) => {
  //    const nextState = swap(photos, sourceIndex, targetIndex)
  //    setPhotos(nextState)
  //  });
  // }, [props.userFolders])

  // const [onChange, setOnChange] = useState()
  // const dndToggle = () => {
  //   edit ? let onChange = (sourceId, sourceIndex, targetIndex, targetId) => {
  //     const nextState = swap(photos, sourceIndex, targetIndex)
  //     setPhotos(nextState)
  //     : null
  // }

  const [start, setStart] = useState();
  const [finish, setFinish] = useState();
  const changeMeter = () => {
    console.log("hello");
  };
  const onChange = (sourceId, sourceIndex, targetIndex, targetId) => {
    // console.log("hello")
    console.log(targetIndex);
    console.log(sourceIndex);
    setStart(0);
    setFinish(0);
    const nextState = swap(photos, sourceIndex, targetIndex);
    setStart(sourceIndex);
    setFinish(targetIndex);
    setPhotos(nextState);
  };

  /// MODAL

  const [openModalForm, setOpenModalForm] = useState(false);
  const [openPhoto, setOpenPhoto] = useState(false);
  const modalToggle = (photo) => {
    //function fires depending on whether picture frames that are empty
    setPhoto(photo);
    photo != undefined && photo.url != null
    ? setOpenPhoto(!openPhoto)
    : setOpenModalForm(!openModalForm);
  };
  
  
  
  const [photo, setPhoto] = useState();
  const handleClick = (photo) => {
    setPhoto(photo);
    console.log(photo);
  };

  // !edit &&
  // const onChange = (sourceId, sourceIndex, targetIndex, targetId) => {
  //     targetIndex != finish
  //     ? setFinish(targetIndex)
  //      const nextState = swap(photos, sourceIndex, targetIndex)
  //       // setStart(sourceIndex)
  //        setPhotos(nextState)
  //     // console.log(onChange)
  //    :   setPhoto(photo)
  //       !edit && photo.url != null
  //       ? setOpenPhoto(!openPhoto)
  //       : setOpenModalForm(!openModalForm)
  //   }

  const reorderSubmit = () => {
    console.log(photos);
    // fetch(`http://localhost:3000/api/v1/folders/${folderId}/photos`, {
    //       method: "PATCH",
    //       headers: {
    //       Authorization: `Bearer ${localStorage.token}`,
    //       "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({
    //         // name: folderName,
    //         // details: "add a description" ,
    //         // link: folderLink ,
    //         // user_id: currentUser.id,
    //     })
    //   })
    //       .then((r) => r.json())
    //       .then((folder) => {
    //        console.log("folder", folder)
    //         setPhotos(folder.photos)
    //         // setFolderToggle(true)
    //       })
  };

  // fetch(`http://localhost:3000/api/v1/users/${currentUser.id}/links`, {
  //     method: 'POST'
  //     , headers: {
  //         Authorization: `Bearer ${localStorage.token}`,
  //         "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       name: linkName,
  //       details: "add a description" ,
  //       link: linkUrl ,
  //       // user_id: currentUser.id
  //   })
  // })
  // .then(res => res.json())
  // .then(linkObj => {
  //   console.log(linkObj)
  //   setUserLinks([...userLinks, linkObj])
  //   }
  // )
  // }
  // console.log(userLinks)

  const mountedStyle = {
    animation: "inAnimation 250ms ease-in",
  };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards",
  };
  const sortPhotos = (a, b) => a.index - b.index;
  return (
    <Router>
      <div className={"cont"}>
        <SideBar
          edit={edit}
          sayHello={sayHello}
          userFolders={userFolders}
          addFolder={addFolder}
          chooseFolder={chooseFolder}
          updateFolder={updateFolder}
          addLink={addLink}
          userLinks={userLinks}
          clickLink={clickLink}
          updateLink={updateLink}
          currentUser={currentUser}
          updateUserAboutMe={updateUserAboutMe}
          userAboutMe={userAboutMe}
          useTemplate={useTemplate}
        />
        <Header
          currentUser={currentUser}
          userName={userName}
          edit={!edit}
          nameSubmit={nameSubmit}
        />
        <AsideRight
          editToggle={editToggle}
          currentUser={currentUser}
          edit={edit}
          reorderSubmit={reorderSubmit}
        />
        <main>
          {/* GRID STARTS HERE */}
          {userProfile ? (
            <article>
              <div className="container">
                <GridContextProvider className="array" onChange={onChange}>
                  <GridDropZone
                    className="grid"
                    id="photos"
                    boxesPerRow={7}
                    rowHeight={100}
                    style={{ height: "1000px" }}
                  >
                    {/* ONLOAD PHOTOS FROM FOLDER AT 0 INDEX LOAD FIRST */}
                    {
                    folderToggle != true && userFolderIds != null
                      ? photos != null &&
                        photos
                          .filter(
                            (photos) =>
                              (photos.folder_id = userFolderIds[folderShown])
                          )
                          .map((photo) => (
                            // photos.sort(sortPhotos).map((photo) => (
                            <GridItem key={photo.id}>
                              <div
                                className={
                                  !edit
                                    ? photo.url != null
                                      ? "picture"
                                      : "edit-picture"
                                    : photo.url != null
                                    ? "picture"
                                    : "emptyBox"
                                }
                                // className={photo.url != null? "picture" : "emptyBox"}
                              >
                                <img
                                  // onClick={() => handleClick(photo)}
                                  onClick={() => modalToggle(photo)}
                                  loading="lazy"
                                  onDragStart={(e) => {
                                    e.preventDefault();
                                  }}
                                  // src={photo.url}
                                  src={
                                    photo.url != null
                                      ? photo.url
                                      : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                  }
                                  className="photo"
                                />
                              </div>
                            </GridItem>
                          ))
                      : photos.map((photo) => (
                          <GridItem
                            key={photo.id}
                            // style={photo.url = null && edit ? mountedStyle : unmountedStyle}
                          >
                            <div
                              className={
                                !edit
                                  ? photo.url != null
                                    ? "picture"
                                    : "edit-picture"
                                  : photo.url != null
                                  ? "picture"
                                  : "emptyBox"
                              }
                            >
                              <img
                                // onClick={() => handleClick(photo)}
                                onClick={() => modalToggle(photo)}
                                className="photo"
                                loading="lazy"
                                onDragStart={(e) => {
                                  e.preventDefault();
                                }}
                                src={
                                  photo.url != null
                                    ? photo.url
                                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                }
                                // className="photo"
                              />
                            </div>
                          </GridItem>
                        ))}
                  </GridDropZone>
                  {/* {placeholder} */}
                </GridContextProvider>
                {openModalForm ? (
                  <Modal
                    key="key"
                    // animation={false}
                    show={openModalForm}
                    onHide={modalToggle}
                    data-backdrop="static"
                  >
                    <Modal.Header>
                      <button
                        className="modalBtn"
                        onClick={() => setOpenModalForm(!openModalForm)}
                      >
                        X
                      </button>
                      {/* FORM START */}
                    </Modal.Header>
                    <form
                      onSubmit={(e) =>
                        addPhoto(e, photo, setOpenModalForm(!openModalForm))
                      }
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
                  </Modal>
                ) : null}
                {/* PHOTO MODAL */}
                {openPhoto ? (
                  <Modal
                    className="modal"
                    show={openPhoto}
                    onHide={modalToggle}
                    data-toggle="modal"
                    data-backdrop="static"
                    data-keyboard="false"
                  >
                    <Modal.Header>
                      <button
                        className="modalBtn"
                        onClick={() => setOpenPhoto(!openPhoto)}
                      >
                        X
                      </button>
                    </Modal.Header>
                    {/* <p>{photo.name}</p> */}
                    {/* <p>{photo.details}</p> */}
                    <img src={photo.url}></img>
                  </Modal>
                ) : null}
              </div>
            </article>
          ) : (
            <article>
              <div className="container">
                <UserLoginSignup
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
                  useTemplate={useTemplate}
                />
              </div>
            </article>
          )}
        </main>
        <footer></footer>
      </div>
    </Router>
  );
};

export default App;

{
  /* <Route exact path="/home" component={(props) => (
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
        )}/>  */
}

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
