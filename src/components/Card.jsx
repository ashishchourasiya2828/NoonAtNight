import React from 'react'

const Card = (props) => {
  return (
    <div className='h-[100%] flex-shrink-0 w-[28vw] bg-green-200 rounded-[8vw] overflow-hidden inline-block m-2'>
      <img className='h-[100%] w-[100%] object-cover' src={props.img} alt="" />
    </div>
  )
}

export default Card