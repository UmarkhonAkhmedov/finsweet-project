import Link from 'next/link';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Image from 'next/image';

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
                <Link href={link} passHref>
                  {buttonMain}
                </Link>
              </div>
              {buttonSm && 
              <div className="hero__info--button__sm"> 
                <Link href="/pricing" passHref>
                  {buttonSm}
                </Link>
                <ArrowRightAltIcon className='icon'/>
              </div>
              }
            </div>
          </div>
          <div className='hero__img'>
            <Image width={638} height={361} src={`/images/${img}`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
