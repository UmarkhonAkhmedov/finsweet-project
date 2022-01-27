import { pricingFeaturesData, pricingPlansData } from "../dummyData";

function PricingPlans() {
  return (
    <div className='container site-plans'>
      <div className="site-plans__heading">
        <h2>Our Pricing Plans</h2>
        <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
      </div>
      <div className='plans'>
        {pricingPlansData.map((element, id) => (
          <div key={id} className="plans__block">
            <div className="plans__block--price">
              <p>{element.price}</p>
              <span>{element.subtitle}</span>
            </div>
            <h5>{element.title}</h5>
            <p className="plans__block--text">{element.text}</p>
            <ul>
              {pricingFeaturesData.map((item, id) => (
                <li key={id}>
                  <img src="/images/pricing/plans__play.svg"/>
                  {item}
                </li>
              ))}
            </ul>
            <a href="/contact">Get started</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;
