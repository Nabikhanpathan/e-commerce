import React from 'react'

const Filter = ({setFilter}) => {

  return (
    <div>
          <div>
      <input
        type="text"
        placeholder="Filter by name"
        id="filterInput"
        onChange={e => setFilter(e.target.value)}
      />
    
    </div>

    </div>
  )
}

export default Filter
