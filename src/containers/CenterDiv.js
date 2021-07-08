import { useState, useEffect } from 'react'
import PhotoGrid from './PhotoGrid'
import Modal from 'react-modal'




const CenterDiv = () => {
    

    let [photos, setPhotos] = useState([])
    

    
    // useEffect(()  => {
    //     // fetch("http://localhost:3000/photos/")
    //     fetch("http://localhost:3000/api/v1/photos/", {
    //         method: "GET",
    //         headers: {Authorization: `Bearer ${localStorage.token}`}
    //         })
    //         .then((r) => r.json())
    //         .then((photoObj) => 
    //         console.log(photoObj)
    //         // setPhotos(photoObj)
    //         );
    //         }, [])
    
        return (
            
                <article>
                   
                <div className="container"  >
                <PhotoGrid 
                photos={photos} 
                />
                {/* {photos.map(photo =><ImageBox photo={photo} key={photo.id}/>)} */}
                </div>
                </article>
        )
    }


export default CenterDiv