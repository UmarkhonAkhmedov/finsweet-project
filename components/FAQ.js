import Link from 'next/link';
import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import { accordionData } from './dummyData';

function FAQ() {
  return (
    <div className='s-padding'>
      <div className='container faq'>
        <div className='faq__heading'>
          <h2>Frequently asked questions</h2>
          <Link href="/contact">Contact us for more info</Link>
        </div>
        <div className='faq__accordion'>
          <Accordion atomic={true} className="accordion">
            <AccordionItem className="accordion__title" title={accordionData[0].title}>
              <p className='faq__accordion--text'>{accordionData[0].text}</p>
            </AccordionItem>
            <AccordionItem className="accordion__title" title={accordionData[1].title}>
              <p className='faq__accordion--text'>{accordionData[0].text}</p>
            </AccordionItem>
            <AccordionItem className="accordion__title" title={accordionData[2].title}>
              <p className='faq__accordion--text'>{accordionData[0].text}</p>
            </AccordionItem>
            <AccordionItem className="accordion__title" title={accordionData[3].title}>
              <p className='faq__accordion--text'>{accordionData[0].text}</p>
            </AccordionItem>
            <AccordionItem className="accordion__title" title={accordionData[4].title}>
              <p className='faq__accordion--text'>{accordionData[0].text}</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
};


export default FAQ;
