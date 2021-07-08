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
            const photo = props.photo
            const [currentPhoto, setCurrentPhoto] = useState(photo)

            useEffect(() => {
                setCurrentPhoto(photo)
            }, [photo])
            
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

            const form = useRef() 

            
            
            
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
            
                const imageRef = useRef()
                const detailRef = useRef()
                const [url, setUrl] = useState("")
                const [details, setDetails] = useState("")
                const handleSubmit = (e) => {
                    e.preventDefault()
                    console.log(e)
                    fetch(`http://localhost:3000/photos/${photo.id}`, {
                        method: 'PATCH',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            name: "",
                            url: imageRef.current.value,
                            details: detailRef.current.value 
                    })
                })
                    .then(res => res.json())
                    .then(photoObj => setCurrentPhoto(photoObj)
                        // console.log(photoObj)
                        // (updatedBox) => {
                        //     setUrl(photo.image)
                        //     setDetails(photo.details)
                        // }
                    )
                }

                
    
                    // alert(imageRef.current.value)


            const [openModalForm, setOpenModalForm] = useState(false)
            const [openPhoto, setOpenPhoto] = useState(false)
            const modalToggle = () => {                
                //function fires depending on whether picture frames that are empty
                photo.url != null 
                ? setOpenPhoto(!openPhoto)
                : setOpenModalForm(!openModalForm)
            }


// FORM MODAL
            const ModalForm = () => {
            return(
                <Modal 
                    // animation={false}
                    show={openModalForm} 
                    onHide={modalToggle}
                    // data-keyboard="false"
                     data-backdrop="static"
                >
                    <Modal.Header>
                        <button  
                        className="modalBtn"  
                        onClick={modalToggle}
                        >X</button>

                    </Modal.Header>
                    <form 
                    ref={form}
                    onSubmit={handleSubmit}
                    >
                        
                        <input 
                        type="text"
                        name="image"
                        placeholder="url"
                        ref={imageRef}
                        />
                        <input
                        type="text"
                        name="details"
                        placeholder="details"
                        ref={detailRef}
                        />
                        <button type="submit">ENTER</button>
                    </form>
                        <p></p>

                </Modal>)}
// PHOTO MODAL
            const EnlargePhotoModal = () => {
                return(
                <Modal className="modal"
                    show={openPhoto}  
                    onHide={modalToggle}
                    data-toggle="modal" data-backdrop="static" data-keyboard="false"
                >
                    <Modal.Header>
                        <button  className="modalBtn"  
                        onClick={modalToggle}
                        >X</button>
                        </Modal.Header> 
                        <p>{currentPhoto.name}</p>
                        <img src={currentPhoto.url}></img>
                        <p>{currentPhoto.comments}</p>
                    

                </Modal>)}

    return (
                
    // className="photos"
        <div className={photo.url != null
            ? "picture" : "emptyBox"}
            >                
            <img 
            onClick={(() => modalToggle(setModalPhoto(currentPhoto)))}
                className="photos"
                loading="lazy"
                src={photo.url}
            ></img>
            
        {/* IMAGE FORM MODAL */}
            {openModalForm ? <ModalForm/> : null}
        {/* PHOTO MODAL */}
            {openPhoto ? <EnlargePhotoModal/> : null}
           
            
            </div> 
        
    )
}

export default PhotoBox