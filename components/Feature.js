import Image from "next/image";

function Feature({data, color}) {
  return (
    <div className="site-feature">
      <div className="container feature">
        {
          data.map((element) => (
            <div key={element.id} className="feature__block" style={{backgroundColor: `${color}`}}>
              <Image width={32} height={32} src={`/images/Home/features__icon--${element.img}.svg`} alt="" />
              <h4>{element.title}</h4>
              <p>{element.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Feature;
