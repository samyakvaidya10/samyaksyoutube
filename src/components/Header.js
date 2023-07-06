import React from 'react'
import { useDispatch } from 'react-redux'
import { changeToggle } from '../store/appSlice';


function Header() {
  const dispatch=useDispatch();
  const handleClick=()=>{
    dispatch(changeToggle())
  }
  return (
    <div className='flex mb-2 justify-center'>
      <button onClick={handleClick}>
        <img className='w-6 m-2' alt='handburger ' src='https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg' />
      </button>
        <img className='h-9 m-2' alt='ytlogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzs7d1nlxerknIa7Ajtp1dwrRknLGo-4oZ7A&usqp=CAU'/>
        <div className='border-2 rounded-full  text-sm border-gray-400 inline m-auto '>
          <input className='ml-2 pl-2 border-none focus:border-none  w-80' type='text' value="" placeholder='Search a video' />
          <button className='p-1 border-l-2 border-gray-400'>search</button>
        </div>
        <img className='w-10 h-10 m-1 ml-auto' alt='profile pic' src='https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600w-2281862025.jpg' />
    </div>
  )
}

export default Header


// header
//     - handburger button
//     - logo
//     - search field
//     - search BigInt
//     - profile pic 