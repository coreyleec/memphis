// import React, { PureComponent } from 'react'
// import { useState, useEffect } from 'react'
// import Modal from 'react-modal'

// const [url, setUrl] = useState("")

// const addPhoto = () => {
//     fetch(`http://localhost:3000/photos/`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         image: null,
//         comments: [] 
//       })
//     })
//     .then(resp => resp.json())
//     .then(photoObjs => setPhotos(...photos, photoObjs)
//     )
//   }

// const handleChange = () => {
// debugger
// }

// const ModalForm = (props) => {
  
//     return (
//         <div>
//             <form>
//                 <input onChange={(e) => handleChange(e.target.value)} >Enter direct Image url</input>
//             </form>
//         </div>
//     )
// }

// export default ModalForm