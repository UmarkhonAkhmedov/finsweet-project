import Image from "next/image";

function Vision() {
  return (
    <div className="container">
      <div className='vision'>
        <div className='vision__info'>
          <h5>Our Vision</h5>
          <h2 className="h2-heading">Laser focus</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className='vision__img'>
          <Image width={514} height={334} src="/images/about/vision__img.png" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Vision;
