import React from 'react'
import './loader.css'
export default function Loader({ width, height, border }) {

   const parentWidth = width + border * 2 + 'px'
   
   return (
      <div class="lds-ring" style={{
         width: parentWidth ,
         height: parentWidth 
      }} >
         <div style={{ width: width + 'px', height: height + 'px', borderWidth: border + 'px' }} ></div>
         <div style={{ width: width + 'px', height: height + 'px', borderWidth: border }}></div>
         <div style={{ width, height, borderWidth: border }}></div>
         <div style={{ width: width + 'px', height: height + 'px', borderWidth: border }}></div>
      </div>
   )
}
