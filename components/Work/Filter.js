import React, { useState } from 'react';
import { templateData } from '../dummyData';
import FilterButton from './FilterButton';
import FilterMenu from './FilterMenu';

const allCategories = ["All", ...new Set(templateData.map(item => item.category))]
function Filter() {
  const [menuItem, setMenuItem] = useState(templateData)
  const [buttons, setButtons] = useState(allCategories);
  const filter = (button) => {
    if(button === "All"){
      setMenuItem(templateData)
      return;
    }
    const filteredData = templateData.filter(item => item.category ===  button)
    setMenuItem(filteredData)
  }
  return (
    <div className='container'>
      <div className='filter'>
        <FilterButton button={buttons} filter={filter}/>
        <FilterMenu menuItem={menuItem}/>
      </div>
    </div>
  );
}

export default Filter;
