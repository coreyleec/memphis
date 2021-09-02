// import { useState, useEffect } from 'react'
// import { React } from 'react'
// import { Modal , Button} from 'react-bootstrap'
// // import Button from 'react-button'
// import axios from 'axios'
// import BootStrapTable from 'react-bootstrap-table-next'
// import PaginationFactory from 'react-bootstrap-table2-paginator'

// const PhotoBox = (props) => {
    
//     // const toggleUpload = () => {
//     //         setUpload(true)
//     //     }
//         // const openModal = () => {
//             //     setUpload(false)
//             // }
            
            
            
//             const [url, setUrl] = useState("")
//             let [frames, setFrames] = useState([])
            
//             const addPhoto = (e, photoUrl) => {
//                 e.preventDefault()
//                 console.log(photoUrl)
//                 // fetch(`http://localhost:3000/photos/`, {
//                 //     method: "PATCH",
//                 //     headers: {
//                 //         "Content-Type": "application/json"
//                 //     },
//                 //     body: JSON.stringify({
//                 //         image: photoUrl,
//                 //         comments: [] 
//                 //     })
//                 // })
//                 // .then(resp => resp.json())
//                 // .then(frameObjs => setFrames(...frames, frameObjs)
//                 // )
//             }
            
//             const handleChange = (e) => {
//                 setUrl()
//             }


            
//             const [modalPhoto, setModalPhoto] = useState([])
//             const [upload, setUpload] = useState([])
            
//             const closeForm = () => {
//                 setOpenPhoto(prevPhoto => !prevPhoto)
//             }
//             const closeModal = () => {
//                 setOpenPhoto(false)
//             }

//             const [openModalForm, setOpenModalForm] = useState(false)
            
//             const [openPhoto, setOpenPhoto] = useState(false)
            
//             const closeToggle = () => {
//                 //function fires depending on whether picture frames that are empty
//                 // setOpenPhoto(prevPhoto => !prevPhoto)
//                 setOpenPhoto(!openPhoto)
//                 // props.photo.image != null 
//                 // ? setOpenPhoto(false)
//                 // : setOpenModalForm(false)
//             }
//             const functionToggle = () => {
//                 setOpenPhoto(true)
//                 //function fires depending on whether picture frames that are empty
//                 // props.photo.image != null 
//                 // ? setOpenPhoto(true)
//                 // : setOpenModalForm(true)

//             }
// // FORM MODAL
//             // const ModalForm = () => {
//             // return(
//             //     <Modal 
//             //     show={openModalForm} 
//             //     image={props.photo.image}
//             //             onHide={functionToggle}
//             //             data-keyboard="false" data-backdrop="static"

//             //     >
//             //         <div>
//             //             <Modal.Header>
//             //             <button  
//             //             className="modalBtn"  
//             //             onClick={functionToggle}
//             //             >X</button>
//             //             </Modal.Header>
//             //         <form onSubmit={addPhoto}  >
//             //             <input onChange={(e) => handleChange(e.target.value)}/>
//             //         </form>
//             //         <p></p>
//             //         </div>
//             //     </Modal>)}
// // PHOTO MODAL
//             // const EnlargePhotoModal = () => {
//             //     return(
//             //     <Modal 
//             //     className="modal"
//             //     show={openPhoto}  
//             //     onHide={closeToggle}
//             //     // data-keyboard="false" 
//             //     data-toggle="modal" data-backdrop="static" data-keyboard="false"
//             //     >
//             //         <Modal.Header>
//             //             <button  
//             //             className="modalBtn"  
//             //             onClick={closeToggle}
//             //             >X</button>
//             //             </Modal.Header>
//             //         {/* {props.photo.image != null 
//             //         ? <div>
//             //             <img src={props.photo.image}></img>
//             //             <p>{props.photo.comments}</p>
//             //         </div>
//             //         : <div>
//             //         <form onSubmit={addPhoto}  >
//             //             <input onChange={(e) => handleChange(e.target.value)}/>
//             //         </form>
//             //             <p></p>
//             //         </div>} */}

//             //     </Modal>)}

//             const [show, setShow] = useState(false);
//             const handleClose = () => setShow(false);
//             const handleShow = () => setShow(true);

//     return (
                
//     // className="photos"
           
           
//            <>
//         <div className={props.photo.image != null
//             ? "picture" : "emptyBox"}
//             >                
//             <img 
//             onClick={handleShow}
//                 className="photos"
//                 loading="lazy"
//                 src={props.photo.image}
//             ></img>
// <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//             </div> 
//     </>


        
//     )
// }

// export default PhotoBox