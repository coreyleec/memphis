import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

export default function Grid(props) {
  // console.log(props)
  const gridRef = useRef(null);
  const { children } = props;

  // useEffect(() => {
  //   const grid = gridRef.current;
  //   adjustGridItemsHeight(grid);
  //   console.log(grid)
  // });
// console.log(children)
  return (
    <GridWrapper 
    // ref={gridRef}
    >
      {children}
    </GridWrapper>
  );
}

// This function adjust each photo in the grid accordlying
// with their height.
// Each photo has to have an inner container, used to calculate
// its overflow. Check GridItem component for an example.
// const adjustGridItemsHeight = (grid) => {
//   const photos = grid.children;

//   for (let i = 0; i < photos.length; i++) {
//     let photo = photos[i];
//     let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
//     let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
//     let rowSpan = Math.ceil((photo.firstChild.getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
//     photo.style.gridRowEnd = "span "+rowSpan;
//   }
  
// }

const GridWrapper = styled.div `
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(240px,1fr));
  grid-auto-rows: 180px;
`;
