import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Hero({heading, text, buttonMain, buttonSm, img, link}) {
  return (
    <div className='site-hero'>
      <div className='container'>
        <div className='hero'>
          <div className='hero__info'>
            <h1>{heading}</h1>
            <p>{text}</p>
            <div className='hero__info--button'>
              <div  className="hero__info--button__main">
                <Link href={link}>
                  {buttonMain}
                </Link>
              </div>
              {buttonSm && 
              <div className="hero__info--button__sm"> 
                <Link href="/pricing" >
                  {buttonSm}
                </Link>
                <ArrowRightAltIcon className='icon'/>
              </div>
              }
            </div>
          </div>
          <div className='hero__img'>
            <img src={`images/${img}`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
