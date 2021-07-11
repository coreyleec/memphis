import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd'
import { Modal } from 'react-bootstrap'
   
const Test = (props) => {
    // target id will only be set if dragging from one dropzone to another.

    const [photos, setPhotos] = useState([])
      // const [photos, setPhotos] = useState()
      useEffect(()  => { 
        // photos.length < 1 &&
        props.currentUser != null &&
         fetch(`http://localhost:3000/api/v1/users/${props.currentUser}/photos/`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
       })
            .then((r) => r.json())
            .then((photoArr) => {
             console.log(photoArr)  
              setPhotos(photoArr)
            }
            )
            ;
            }, []) 

            // const [userPhotos, setUserPhotos] = useState([])

            const [url, setUrl] = useState()
            const [details, setDetails] = useState()
            const [name, setName] = useState()
  
            const handleName = (data) => {setName(data)}  
            const handleUrl = (data) => {setUrl(data)}
            const handleDetails = (data) => {setDetails(data)}     
  
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



    const onChange = (sourceId, sourceIndex, targetIndex, targetId) => {
      const nextState = swap(photos, sourceIndex, targetIndex);
      setPhotos(nextState);
    }
    // const handleClick = (image) => { 
    //   console.log(image)
    // }

    console.log(photos)
    
    let [frames, setFrames] = useState([])
    const [upload, setUpload] = useState([])
    const [modalPhoto, setModalPhoto] = useState()
         


    const toggleModal = () => {
        photo.url != null 
        && setOpenPhoto(!openPhoto)
       
    }
    
    const nameRef = useRef()
    const imageRef = useRef()
    const detailRef = useRef()
   




    // const [photo, setCurrentPhoto] = useState(photo)

    const [photo, setPhoto] = useState()

    const handleClick = (photo) => {
        setPhoto(photo)
        console.log(photo)
    }
    const [openModalForm, setOpenModalForm] = useState(false)
    const [openPhoto, setOpenPhoto] = useState(false)
    
    const modalToggle = (photo) => {                
    //function fires depending on whether picture frames that are empty
          setPhoto(photo)
          photo.url != null 
        ? setOpenPhoto(!openPhoto)
        : setOpenModalForm(!openModalForm)
    }

console.log("hello")
    return (

      <div>
      <GridContextProvider className="array"  
      onChange={onChange}>
        <GridDropZone
          className="grid"
          id="photos"
          boxesPerRow={4}
          rowHeight={100}
          style={{ height: "780px" }}
        >
          {photos != null && photos.map(photo => (
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
          ))}
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
                onChange={(e) => handleName(e.target.value)}
                />
                <input
                type="text"
                name="details"
                placeholder="details"
                onChange={(e) => handleDetails(e.target.value)}
                />
                <input 
                type="text"
                name="image"
                placeholder="url"
                onChange={(e) => handleUrl(e.target.value)}
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
    );
  }

  export default Test



//   const handleSubmit = (e) => {
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