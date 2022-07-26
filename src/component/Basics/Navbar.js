import React from 'react'
import './style.css'

const Navbar = ({filterItem,uniqueList}) => {
  return (
    <>
    <nav className='navbar'>
      <div className='btn-group'>
      {
       uniqueList.map((curelm)=>{
        return(
            <>
                 <button className='btn-group__item' onClick={()=>filterItem(curelm)}>{curelm}</button>
            </>
        )
    
    })
    }
       </div>
    </nav> 
    </>
  )
}

export default Navbar