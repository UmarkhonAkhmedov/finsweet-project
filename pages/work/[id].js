import React from 'react';

function CaseStudies() {
  return (
    <div className='container'>
      <div className='caseStudies'>
        <h4>Web design and development</h4>
        <h2>Finsweet Design case studies</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        <img className='caseStudies__img' src="/images/work/work__id--main.png" alt="" />
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
            <li><img src="/images/work/work__id--about__circle.svg"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li><img src="/images/work/work__id--about__circle.svg"/> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
            <li><img src="/images/work/work__id--about__circle.svg"/> Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
            <li><img src="/images/work/work__id--about__circle.svg"/> Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
          </ul>
          <img className='caseStudies__about--img' src="/images/work/work__id--about.png"/>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;




