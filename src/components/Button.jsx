import React from 'react'
const Button = (props) => {
  
  return (
    <div>
        <button id='buttonOne' className='px-5 py-2 rounded-xl text-black font-semibold border-[1px] border-black '>{props.text}</button>
    </div>
  )
}

export default Button