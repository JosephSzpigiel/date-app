import React from 'react'
import {Dropdown} from 'semantic-ui-react'

function FilterButton({ handleFilterChange }) {
    const filterOptions = [
      { key: 'adventure', text: 'Adventure', value: 'Adventure' },
      { key: 'creative', text: 'Creative', value: 'Creative' },
      { key: 'comfy', text: 'Comfy', value: 'Comfy' },
      { key: 'fun', text: 'Fun', value: 'Fun' },
      { key: 'romantic', text: 'Romantic', value: 'Romantic' },
      { key: 'unique', text: 'Unique', value: 'Unique' },
    ];
  
    return (
      <Dropdown
        placeholder="Filter by Mood"
        selection
        clearable options={filterOptions}
        onChange={handleFilterChange}
      />
    );
  }

  export default FilterButton;