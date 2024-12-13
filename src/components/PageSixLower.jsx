import React from 'react'

const PageSixLower = (props) => {
  return (
        <div className=' w-[100%]  mt-[1vw]'>
          <h1 className='text-s text-zinc-400 font-serif'>{props.text1}</h1>
          <h1 className='text-2xl font-semibold font-sans mt-[-1vh]'>{props.text2}</h1>
          <div  >
            <button className='px-3 py-1 rounded-lg bg-[#E4E4E4] border-[1px] border-black text-xs mr-2 mt-1' >BRAND STORY</button>
            <button className='px-3 py-1 rounded-lg bg-[#E4E4E4] border-[1px] border-black text-xs' >MARKIDENTITIET</button>
          </div>
        </div>
  )
}

export default PageSixLower