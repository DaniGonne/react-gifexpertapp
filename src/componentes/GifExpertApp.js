import React, { useState } from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

const GifExpertApp = () => {

const [categories, setCategories] = useState(['One Punch']);

// const handleAdd = () => {
//     //setCategories( ['HunterXHunter',...categories]);
//     setCategories(cats => [...cats, 'HunterXHunter']);
// }

  return (
      <>

<h2>GifExpertApp</h2>
<AddCategory setCategories={ setCategories }/>
<hr/>

<ol>
    {
        categories.map( category => (
        <GifGrid 
            key={ category }
            category={ category } 
            />
            //return <li key={category}> {category} </li>
        ))
    }
</ol>
    
    </>
  )
}

export default GifExpertApp