import { useState } from 'react'

import './search.css'

const Search = ({onSubmit}) => {
  const [searchValue, setSearchValue] = useState("")

  const onChangeSearch = (event) => {
    
    setSearchValue(event.target.value)
  }

  const onSubmitSearch =(event) => {
    //validations
    console.log({searchValue})
    onSubmit(searchValue)
  }

  return (
    <div className="main-search">
      <input type="text" onChange={onChangeSearch} />
      <button onClick={onSubmitSearch}>Submit</button>
    </div>
  );
}
 
export default Search;