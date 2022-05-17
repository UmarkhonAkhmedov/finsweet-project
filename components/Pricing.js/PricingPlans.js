import Image from "next/image";
import Link from "next/link";
import { pricingFeaturesData, pricingPlansData } from "../dummyData";

function PricingPlans() {
  return (
    <div className='container site-plans'>
      <div className="site-plans__heading">
        <h2>Our Pricing Plans</h2>
        <p>When you&apos;re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
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
                  <Image width={26} height={18} src="/images/pricing/plans__play.svg" alt=""/>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" passHref>Get started</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;
