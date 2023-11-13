import React, { useState } from 'react';


function List({ categories, onCategorySelect }) {

  return (
    <div>

<div class="sidebar mt-3">
       {categories.map(category => (
        <a key={category.id} onClick={() => onCategorySelect(category.id)}>
          {category.name}
        </a>
      ))}
    </div>
      
    </div>
  )
}

export default List
