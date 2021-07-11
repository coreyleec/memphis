// import React, { PureComponent } from 'react'
// import { useState, useEffect } from 'react'
// import Frame from './Frame'
// import Photo from './Photo'
// import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'


// const Grid = () => {
    
    
//     // const [photos, setPhotos] = useState()
//     //     useEffect(()  => { 
//     //  // photos.length < 1 &&
//     //  fetch("http://localhost:3000/photos/", {
//     //      method: "GET",
//     //      headers: { "Content-Type": "application/json" },
//     // })
//     //      .then((r) => r.json())
//     //      .then((photoArr) => {
//     //          setPhotos(photoArr)
//     //      }
//     //      );
//     //      }, [])
        
//    console.log(photos)
   
   
// //    const [frames, updateFrames] = useState(photos.prevState)

// const handleOnDragEnd = (result) => {
// console.log("result", result)
//     if (!result.destination) return;
//     const items = Array.from(photos)
// console.log("items", items)
//     const[reorderedItem] = items.splice(result.source.index, 1)
// console.log("reorderedItem", [reorderedItem])
//     items.splice(result.destination.index, 0, reorderedItem)

//     setPhotos(items)
//     console.log(photos)
// }
// // photos.prevState.splice(result.source.index, 1)
// // setPhotos()

//     return (
//         <div className="App">  
//         <main 
//         // className="flexbox"
//          >
//              <DragDropContext onDragEnd={handleOnDragEnd}  >
//                  <Droppable droppableId="images" >
//                      {(provided) => (
//         <ul className="array" {...provided.droppableProps} ref={provided.innerRef}>
//             {photos != null && photos.map(({id, name, details, url}) => {
//             return (
//                 <Draggable key={id} draggableId={id.toString()} index={id} >
//                     {(provided) => (
//                 <li 
//                 {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}
//                 key={id} 
//                 className={url != null
//                     ? "notEmpty" : "empty"}
//                     > 
//                         <p>{name}</p>
//                     <div className="photo-thumb">
//                         <img src={url} />
//                     </div>
//                         <p>{details}</p>
//                     </li>)}
//                 </Draggable>
//                 )
//             })}
//             {provided.placeholder}
//         </ul>
//         )}
//         </Droppable>
//         </DragDropContext> 






//         {/* <Frame  id="frame-1" className="frame">
//             <Photo id="photo-1" className="pic" draggable="true" >
//             <p> Card One</p>

//             </Photo>
//         </Frame>

//         <Frame id="frame-2" className="frame" >
//             <Photo id="photo-2" className="pic" draggable="true" >
//             <p> Card Two</p>
//             </Photo>
//         </Frame>

//         <Frame id="frame-3" className="frame" >
//             <Photo id="photo-3" className="pic" draggable="true" >
//             <p> Card Two</p>
//             </Photo>
//         </Frame> */}

//         </main>    
//         </div>
//     )

    

//     }
// export default Grid