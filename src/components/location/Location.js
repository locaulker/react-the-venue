import React from 'react'

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5235374791355!2d-73.99562738440885!3d40.75050854319532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21fb011c85%3A0x33df10e49762f8e4!2sMadison%20Square%20Garden!5e0!3m2!1sen!2sus!4v1578868016482!5m2!1sen!2sus"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen=""
      ></iframe>
      <div className="location_tag">
        <div>LOCATION</div>
      </div>
    </div>
  )
}

export default Location