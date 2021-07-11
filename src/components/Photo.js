import React, { PureComponent } from 'react'
import { useState, useEffect } from 'react'

const Photo = (props) => {
    
    const dragStart = e => {
        const target = e.target
            console.log(target)
        e.dataTransfer.setData('photo_id', target.id)

        setTimeout(() => {
            target.style.display = "none"
        }, 0);
        // e.stopPropogation()
    }
    const dragOver = e => {
        console.log(e)
        // e.stopPropogation()
    }

    return (
        <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        onDragStart={dragStart}
        onDragOver={dragOver}
        >
            {props.children}
        </div>
    )

    

    }
export default Photo