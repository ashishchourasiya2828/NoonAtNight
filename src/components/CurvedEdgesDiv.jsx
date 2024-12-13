import React from 'react'
import CurvedEdgeInner from './CurvedEdgeInner'

const   CurvedEdgesDiv = (props) => {
    
  return (
    <div id='curvedEdge' className={`${props.height1} w-full mt-[2vw] rounded-[4vw] flex items-center justify-center relative overflow-hidden bg-red-300 `}>
        <img id='curvedEdgeimg' className='h-full origin-center w-full object-cover  absolute' src={props.img} alt="" />
        <div id='innerDiv' className="h-[20vw] w-[20vw] bg-red-400 z-9 overflow-hidden rounded-[4vw] relative opacity-0  ">
        <img src={props.innerimg} className='h-[100%] w-[100%] object-cover' alt="" />
    </div>
    </div>
)
}

export default CurvedEdgesDiv