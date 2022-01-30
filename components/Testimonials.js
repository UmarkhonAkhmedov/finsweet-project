import { useState } from "react";
import { testimonialData } from "./dummyData";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextClick = () => {
    if(current < 3){
      setCurrent(current++)
    } else if(current === 3){
      setCurrent(current = 0)
    }
  }
  const prevClick = () => {
    if(current > 0){
      setCurrent(current - 1)
    } else if(current === 0){
      setCurrent(current = 2)
    }
  }
  
  return (
    <div className="testimonials">
      <p>"{testimonialData[current].quote}"</p>
      <div className="testimonials__main">
        <div className="testimonials__main--client">
          <img src={`/images/home/${testimonialData[current].clientImg}`}/>
          <span>
            <h5>{testimonialData[current].client}</h5>
            <h6>{testimonialData[current].clientJob}</h6>
          </span>
        </div>
        <div className="testimonials__main--buttons">
          <button className="testimonials__main--buttons__left" onClick={prevClick}>
            <ArrowBackIosNewIcon className="icon"/>
          </button>
          <button className="testimonials__main--buttons__right" onClick={nextClick}>
            <ArrowForwardIosIcon className="icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials