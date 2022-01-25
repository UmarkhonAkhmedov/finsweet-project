
function Feature({data, color}) {
  return (
    <div className="site-feature">
      <div className="container feature">
        {
          data.map((element) => (
            <div className="feature__block" style={{backgroundColor: `${color}`}}>
              <img src={`/images/home/features__icon--${element.img}.svg`} alt="" />
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
