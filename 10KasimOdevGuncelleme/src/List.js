import React, { useState } from 'react';


function List({ categories, onCategorySelect }) {

  return (
    <div>

<div class="sidebar mt-3">
       {categories.map(kamil => (
        <a key={kamil.id} onClick={() => onCategorySelect(kamil.id)}>
          {kamil.name}
        </a>
      ))}
    </div>
      
    </div>
  )
}

export default List
