import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { accordionData } from './dummyData';

function FAQ() {
  return (
    <div className='container'>
      <div>

      </div>
      <div>
        <Accordion atomic={true}>
          <AccordionItem title={accordionData[0].title}>
            <p>{accordionData[0].text}</p>
          </AccordionItem>
          <AccordionItem title={accordionData[1].title}>
            <p>{accordionData[0].text}</p>
          </AccordionItem>
          <AccordionItem title={accordionData[2].title}>
            <p>{accordionData[0].text}</p>
          </AccordionItem>
          <AccordionItem title={accordionData[3].title}>
            <p>{accordionData[0].text}</p>
          </AccordionItem>
          <AccordionItem title={accordionData[4].title}>
            <p>{accordionData[0].text}</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
};


export default FAQ;
