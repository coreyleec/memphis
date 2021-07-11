// import React, { PureComponent } from 'react'
// import React from 'react'
import { React, useState, useEffect, useRef } from 'react'
import Test from './Test'

const ParentTest = () => {
    
    const [photos, setPhotos] = useState()
   
    // const [photos, setPhotos] = useState()
    useEffect(()  => { 
 // photos.length < 1 &&
 fetch("http://localhost:3000/photos/", {
     method: "GET",
     headers: { "Content-Type": "application/json" },
})
     .then((r) => r.json())
     .then((photoArr) => {
      console.log(photoArr)  
       setPhotos(photoArr)
     }
     );
     }, [])
console.log(photos)


    return (
        <div>
            <Test photos={photos} />
        </div>
    )

    

    }
export default ParentTest