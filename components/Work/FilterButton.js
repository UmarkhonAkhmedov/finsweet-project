import React from 'react';

function FilterButton({button, filter}) {
  return (
    <div className='filterButton'>
      {button.map((category, index) => {
        return (
          <button key={index} type='button' onClick={()=>filter(category)}>{category}</button>
        )
      })}
    </div>
  );
}

export default FilterButton;

