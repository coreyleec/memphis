import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { React } from 'react'
import { Modal , Button} from 'react-bootstrap'
// import Button from 'react-button'
import axios from 'axios'
import BootStrapTable from 'react-bootstrap-table-next'
import PaginationFactory from 'react-bootstrap-table2-paginator'

const PhotoBox = (props) => {
            
            let [frames, setFrames] = useState([])
            const [modalPhoto, setModalPhoto] = useState()
            const [upload, setUpload] = useState([])
            

            
           
            

            const form = useRef() 

            
            

                const handleSubmit = (e) => {
                    e.preventDefault()
                    console.log(e)
                    fetch(`http://localhost:3000/api/v1/photos/${currentPhoto.id}`, {
                        method: 'PATCH'
                        , headers: {
                            Authorization: `Bearer ${localStorage.token}`,
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: "",
                            url: imageRef.current.value,
                            details: detailRef.current.value,
                    })
                })
                    .then(res => res.json())
                    .then(photoObj => {
                        setCurrentPhoto(photoObj)
                        console.log(photoObj)
                        console.log(imageRef.current.value)}
                        // (updatedBox) => {
                        //     setUrl(photo.image)
                        //     setDetails(photo.details)
                        // }
                    )
                }

                
    
                    // alert(imageRef.current.value)
                 


            const toggleModal = () => {
                photo.url != null 
                && setOpenPhoto(!openPhoto)
               
            }
            
            const nameRef = useRef()
            const imageRef = useRef()
            const detailRef = useRef()
            const [url, setUrl] = useState()
            const [details, setDetails] = useState()
            const [name, setName] = useState()



   const photo = props.photo
                    const [currentPhoto, setCurrentPhoto] = useState(photo)
                    const handleClick = () => {
                        setCurrentPhoto(photo)
                        console.log(currentPhoto)
                    }
            const [openModalForm, setOpenModalForm] = useState(false)
            const [openPhoto, setOpenPhoto] = useState(false)
            const modalToggle = () => {                
                //function fires depending on whether picture frames that are empty
                photo.url != null 
                ? setOpenPhoto(!openPhoto)
                : setOpenModalForm(!openModalForm)
            }


            // const drop = e => {
            //     e.preventDefault()
            //     const box_id = e.dataTransfer.getData('box_id')
            
            //     const card = document.getElementById(box_id)
            //     card.style.display = 'block'
            
            //     e.target.appendChild(card)
            //   }
            
            //   const dragOver = e => {
            //     e.preventDefault()
            //   }

            
// PHOTO MODAL
           

    return (
                
    // className="photos"
        <div 
            className={photo.url != null
            ? "picture" : "emptyBox"}
            onMouseDown={() => props.handleDrag(photo)}
            onMouseUp={() => props.handleDrop(photo)}
            >                
            <img 
            onClick={(() => modalToggle(handleClick(photo)))}
                className="photo"
                loading="lazy"
                src={photo.url}
            ></img>
            
{/* IMAGE FORM MODAL */}
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
                    onSubmit={(e) => props.addPhoto(e, photo, setOpenModalForm(!openModalForm))}                    
                    >
                        <input 
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={(e) => props.handleName(e.target.value)}
                        />
                        <input
                        type="text"
                        name="details"
                        placeholder="details"
                        onChange={(e) => props.handleDetails(e.target.value)}
                        />
                        <input 
                        type="text"
                        name="image"
                        placeholder="url"
                        onChange={(e) => props.handleUrl(e.target.value)}
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
                        <p>{currentPhoto.name}</p>
                        <img 
                        
                        src={currentPhoto.url}></img>
                        <p>{currentPhoto.comments}</p>
                        </Modal> 
                        : null}
           
            
            </div> 
        
    )
}

export default PhotoBox



 // const handleSubmit = (e) => {
            //     e.preventDefault()
            //     setUrl(imageRef.current.value)
            //     setDetails(detailRef.current.valid)
            //     console.log(url, details)
            // }

           
            // const handleSubmit = e => {
            //     e.preventDefault()

            //     const data = new FormData(form.current)
            //     fetch(`http://localhost:3000/photos/${photo.id}`, {
            //         method: 'PATCH',
            //         body: data,
            // })
            //     .then(res => res.json())
            //     .then(photo => 
            //         // setUrl(photo.image)
            //         console.log(photo)
            //         )
            //     }

                // alert(imageRef.current.value)


                           // const addPhoto = (e) => {
            //     e.preventDefault()
            //     debugger
            //     console.log(e)
            //     fetch(`http://localhost:3000/photos/`, {
            //             method: "PATCH",
            //             headers: {
            //                     "Content-Type": "application/json"
            //                 },
            //                 body: JSON.stringify({
            //                         image: photoUrl,
            //                         comments: [] 
            //                     })
            //                 })
            //                 .then(resp => resp.json())
            //                 .then(frameObjs => setFrames(...frames, frameObjs)
            //                 )
            //             }
                       
            //             useEffect(() => {

            //             }, [])



            // <div 
            // id={photo.id}
            // className={photo.url != null
            // ? "picture" : "emptyBox"}
            // onMouseDown={() => props.handleDrag(props.photo)}
            // onDrop={photo.url === null && props.drop}
            
            
            // // draggable={photo.url != null ? "true" : "false"}
            // >                
            // <img 
            //     onClick={(() => modalToggle(handleClick(photo)))}
            //     // id={photo.id}
            //     src={photo.url}
            //     // draggable={photo.url != null ? "true" : "false"}
            //     onDragStart={photo.url != null && props.dragStart}
            //     draggable={props.draggable}
            //         id={props.id}
            //         className={props.className}
            //         loading="lazy"
            //         onDragOver={props.dragOver}
            //         // onDragOver={dragOver}
            //         onDragStart={photo.url != null && props.dragStart}
            //         draggable={photo.url != null ? "true" : "false"}

            // ></img>