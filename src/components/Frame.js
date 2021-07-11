import React, { PureComponent } from 'react'
import { useState, useEffect } from 'react' 
// import Photo from './Photo'

const Frame = (props) => {
    console.log(props)
    const drop = e => {
        e.preventDefault()
        console.log(e)
        const photo_id = e.dataTransfer.getData('photo_id')
            console.log(photo_id)
 
        const photo = document.getElementById(photo_id)
        photo.style.display = 'block'
            console.log(photo)
 
        e.target.appendChild(photo)
      }
      
    
      const dragOver = e => {
        e.preventDefault()
      }

// const dragEnd = e => {
//   if (e.target.style.display === 'none') {
//     e.target.style.display = 'block';
//   }
// }
    return (
        <div
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        >
            {props.children}
        </div>
    )

    

    }
export default Frame