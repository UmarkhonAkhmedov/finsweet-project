import { useState, useEffect, useLayoutEffect } from "react";
import { templateData, testimonialData } from "./dummyData";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Testimonials() {
  const [current, setCurrent] = useState(templateData[0]);
  const length = testimonialData.length

  const nextClick = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevClick = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(testimonialData) || testimonialData.length <= 0){
    return null;
  }
  
  return (
    <div className="testimonials">
      <p>"{current.quote}"</p>
      <div className="testimonials__main">
        <div className="testimonials__main--client">
          <img src={`/images/home/${current.clientImg}`}/>
          <span>
            <h5>{current.client}</h5>
            <h6>{current.clientJob}</h6>
          </span>
        </div>
        <div className="testimonials__main--buttons">
          <button className="testimonials__main--buttons__left">
            <ArrowBackIosNewIcon className="icon" onClick={prevClick}/>
          </button>
          <button className="testimonials__main--buttons__right">
            <ArrowForwardIosIcon className="icon" onClick={nextClick}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials