import { useState, useEffect } from "react";
import { testimonialData } from "./dummyData";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Testimonials() {
  const [current, setCurrent] = useState(testimonialData[0])
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
            <ArrowBackIosNewIcon className="icon"/>
          </button>
          <button className="testimonials__main--buttons__right">
            <ArrowForwardIosIcon className="icon"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials