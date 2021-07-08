import { useState, useEffect } from 'react'
import  React  from 'react'
import PhotoBox from '../components/PhotoBox'



const PhotoGrid = (props) => {


// const imgCont = React.createElement('div', {style: {color: "red", height:"20px", width: "20px" }, className: "imageSquare"})
// const imgSqr = React.createElement('ImgSquare',{} , {})

    




let [photos, setPhotos] = useState([])

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
      })
    })
    .then(resp => resp.json())
    .then(photoObjs => setPhotos(...photos, photoObjs)
    )
  }
  

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
  
  useEffect(()  => {
    // if (photos < 50)
    //  return createFrame()
    // for (let i = 0; i < 50; i++) {
    //   createFrame()
    // }
        })


// const rowNum = 1
// const colNum = 1

// let m = 
let n = 50
// let n = props.photos.length
const frames = props.photos.filter(photo => photo.url = null)
// let m = frames.length
    return (
        <div >
{/* {      [...Array(n)].map((elementInArray, index) => createFrame()}) */}

       {/* {n >= frames/2 && [...Array(5)].forEach((_, i) => createFrame(i + 1))
        } */}

        {/* {[...Array(n)].map((item, index) => ( <div 
        className="photoFrame" key={index} 
        style={{backgroundColor: "red", height:"80px", width: "80px", outlineWidth: "5px", padding: "10px",margin: "10px", outlineColor: "black"}}
        > empty image container </div> 
            )) } */}

        {/* {props.photos.map(photo =><ImageBox photo={photo} key={photo.id} />)} */}
        {props.photos.map(photo =><PhotoBox photo={photo} key={photo.id} />)}
            </div>

    )
}

export default PhotoGrid