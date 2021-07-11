import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import  React  from 'react'
import PhotoBox from '../components/PhotoBox'



const PhotoGrid = (props) => {


// const imgCont = React.createElement('div', {style: {color: "red", height:"20px", width: "20px" }, className: "imageSquare"})
// const imgSqr = React.createElement('ImgSquare',{} , {})

let [newFrames, setNewFrames] = useState([])

let createFrame = () => {
  fetch(`http://localhost:3000/api/v1/photos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: null,
        details: null,
        url: null, 
        // user_id: user.id
      })
    })
    .then(resp => resp.json())
    .then(frameObjs => setNewFrames(...props.photos, frameObjs)
    )
  }
  
  useEffect(()  => {
    // if (photos < 50)
    //  return createFrame()
    // for (let i = 0; i < 50; i++) {
    //   createFrame()
    // }
        })
 
  




// let n = 50
// let photos = props.photos.length
// const frames = props.userPhotos.filter(photo => photo.url = null).length

    return (




      
      
      <article>
            <div className="container">
              <div>
            {props.userPhotos != null 
            && props.userPhotos.map(photo =><PhotoBox 
              handleDrop={props.handleDrop}
              handleDrag={props.handleDrag} photo={photo} key={photo.id} {...props} />
            
            )}
            </div>
            </div>
    </article> 
    )
}

export default PhotoGrid


 // useEffect(()  => {
  //   // fetch("http://localhost:3000/photos/")
  //   fetch("http://localhost:3000/api/v1/photos/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       image: null,
  //       comments: [] 
  //     })
  //     })
  //       .then((r) => r.json())
  //       .then((photoObj) => setPhotos(...photos, photoObj)
  //       )
  //       }, [])

  // useEffect(()  => {
//   props.currentLogin != null && 
//   // photos.length < 1 &&
//   fetch("http://localhost:3000/api/v1/photos/", {
//       method: "GET",
//       headers: {Authorization: `Bearer ${localStorage.token}`}
//       })
//       .then((r) => r.json())
//       .then((photoObj) => {
//           console.log(photoObj)
//       setPhotos(photoObj)
//       }
//       );
//       }, [])l




// <div >
// {/* {      [...Array(n)].map((elementInArray, index) => createFrame()}) */}

//        {/* {n >= frames/2 && [...Array(5)].forEach((_, i) => createFrame(i + 1))
//         } */}

//         {/* {[...Array(n)].map((item, index) => ( <div 
//         className="photoFrame" key={index} 
//         style={{backgroundColor: "red", height:"80px", width: "80px", outlineWidth: "5px", padding: "10px",margin: "10px", outlineColor: "black"}}
//         > empty image container </div> 
//             )) } */}

//         {/* {props.photos.map(photo =><ImageBox photo={photo} key={photo.id} />)} */}
//         {props.userPhotos != null 
//         // && console.log(props.userPhotos) 
//         && props.userPhotos.map(photo =><PhotoBox photo={photo} key={photo.id}
//           addPhoto={props.addPhoto}

//         // nameRef={nameRef} imageRef={imageRef} detailRef={detailRef}
//         {...props} 
//          />)}
//             </div>






// const drop = e => {
//   e.preventDefault()
//   const photo_id = e.dataTransfer.getData('photo_id')
//       console.log(photo_id)
//   const photo = document.getElementById(photo_id)
//   photo.style.display = 'block'
//       console.log(photo)
//   e.target.appendChild(photo)
// }

// const dragOver = e => {
//   e.preventDefault()
// }

// return (
// <div className="container"  ></div>
//       <div >
//       {props.userPhotos != null 
//       && props.userPhotos.map(photo =><PhotoBox 
//       photo={photo} key={photo.id} {...props} 
//       id={props.id}
//       className={props.className}
//       onDrop={drop}
//       onDragOver={dragOver}
//       />)}
//       </div>

// )
// }
// <article>
// <div className="container"  >
//       <div >
//       {props.userPhotos != null 
//       && props.userPhotos.map(photo =><PhotoBox 
//         handleDrag={props.handleDrag}
//       photo={photo} key={photo.id} {...props} 
//       id={props.id}
//       className={props.className}
//       onDrop={drop}
//       onDragOver={dragOver}
//       />)}
//       </div>
//   </div>
//   </article>