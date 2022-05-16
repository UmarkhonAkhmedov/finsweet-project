import React from 'react';
import BuildTogether from "../../components/Work/BuildTogether"
import Image from 'next/image';

function CaseStudies() {
  return (
    <div className='container'>
      <div className='caseStudies'>
        <h4>Web design and development</h4>
        <h2>Finsweet Design case studies</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <Image width={1063} height={641} className='caseStudies__img' src="/images/work/work__id--main.png" alt=""/>
        <div className='caseStudies__details'>
          <div>
            <h6>Client</h6>
            <h5>facebook.com</h5>
          </div>
          <div>
            <h6>Service</h6>
            <h5>Product Design</h5>
          </div>
          <div>
            <h6>Deliverable</h6>
            <h5>UI Screens, UX Flow & Prototype</h5>
          </div>
        </div>

        <div className='caseStudies__about'>
          <h3>About the project</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul>
            <li><Image width={5} height={5} src="/images/work/work__id--about__circle.svg" alt=""/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li><Image width={5} height={5} src="/images/work/work__id--about__circle.svg" alt=""/> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li><Image width={5} height={5} src="/images/work/work__id--about__circle.svg" alt=""/> Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
            <li><Image width={5} height={5} src="/images/work/work__id--about__circle.svg" alt=""/> Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
          </ul>
          <Image width={842} height={508} className='caseStudies__about--img' src="/images/work/work__id--about.png" alt=""/>
          <h3 className='caseStudies__about--how'>How we do it</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <ul>
            <li><Image style={{marginRight: "15"}} width={5} height={5} src="/images/work/work__id--about__circle.svg" alt=""/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li><Image width={5} height={5} src="/images/work/work__id--about__circle.svg" alt=""/> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li><Image width={5} height={5} src="/images/work/work__id--about__circle.svg" alt=""/> Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
            <li><Image width={5} height={5} src="/images/work/work__id--about__circle.svg" alt=""/> Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
          </ul>
        </div>
        <BuildTogether/>
      </div>
    </div>
  );
}

export default CaseStudies;




