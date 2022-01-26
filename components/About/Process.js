import { processData } from "../dummyData";

function Process() {
  return (
    <div className="container">
      <div className="process">
        {processData.map((item) => (
          <div className="process__main" key={item.id}>
            <div className="process__main--line">
              <span className="process__main--line__circle"></span>
              <span className="process__main--line__border"></span>
            </div>
            <div className="process__main--info"> 
              <h6>{item.title}</h6>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;
