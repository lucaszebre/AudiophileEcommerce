import React from 'react'
import './DisplayImage.css'
const DisplayImage = (props) => {
  return (
  <div className="DisplayImageContainer">
      <div className="DisplayImageWrapper">
      <div className="DisplayImageBlock">
        <img className='DisplayImage1D' src={props.image1D} alt="image1-display" />
        <img className='DisplayImage2D' src={props.image2D} alt="image2-display" />
        <img className='DisplayImage1T' src={props.image1D} alt="image1-display" />
        <img className='DisplayImage2T' src={props.image2D} alt="image2-display" />
        <img className='DisplayImage1M' src={props.image1D} alt="image1-display" />
        <img className='DisplayImage2M' src={props.image2D} alt="image2-display" />
      </div>
      <img className='DisplayImage3D' src={props.image3D} alt="image3-display" />
      <img className='DisplayImage3T' src={props.image3D} alt="image3-display" />
      <img className='DisplayImage3M' src={props.image3D} alt="image3-display" />
    </div>
  </div>
  )
}

export default DisplayImage
