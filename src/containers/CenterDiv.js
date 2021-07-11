import { useState, useEffect } from 'react'
import PhotoGrid from './PhotoGrid'
import PhotoBox from '../components/PhotoBox'
import Modal from 'react-modal'



const CenterDiv = (props) => {
    

    let [photos, setPhotos] = useState([])
    
    // useEffect(()  => {
    //     props.currentLogin != null &&
    //     fetch("http://localhost:3000/api/v1/photos/", {
    //         method: "GET",
    //         // headers: {Authorization: `Bearer ${localStorage.token}`}
    //         })
    //         .then((r) => r.json())
    //         .then((photoObj) => {
    //             console.log(photoObj)
    //         setPhotos(photoObj)
    //         }
    //         );
    //         }, [])
    
      
    // useEffect(()  => {
    
    //         }, [])


          


        return (
            
                <article>
                   
                {/* <div className="container"  > */}
                <PhotoGrid currentUser={props.currentUser}
                userPhotos={props.userPhotos} {...props}  />
                    
                    {/* <div >
                    {props.userPhotos != null 
                    && props.userPhotos.map(photo =><PhotoBox photo={photo} key={photo.id} {...props} >

                    </PhotoBox>)}
                    </div> */}
                 

                {/* </div> */}
                </article>
        )
    }


export default CenterDiv