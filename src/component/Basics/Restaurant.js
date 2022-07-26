import React,{useState} from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList =[...new Set(Menu.map((elem)=>{
  return (elem.category)
})),"All"]

const Restaurant = () => {
  const[menuData,setmenuData]=useState(Menu)
  const filterItem=(category)=>{
    if(category==="All"){
      setmenuData(Menu)
      return;
    }
    const updatedList=Menu.filter((elem)=>{return elem.category === category})
    setmenuData(updatedList)
  }
  return (
    <>
    <Navbar filterItem={filterItem} uniqueList={uniqueList}/>
    <MenuCard menuData={menuData}/>
    </>
  )
}

      


export default Restaurant