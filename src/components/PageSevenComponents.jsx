import React from 'react'

const PageSevenComponents = (props) => {
  return (
    <div id='component' className='h-full w-[25%] rounded-xl overflow-hidden '>
        <div id='PageSevenDiv' className='h-[60%] w-full overflow-hidden '>
            <img className='h-full w-full object-cover' src={props.img} alt="" />

        </div>
        <div id='helyoo' className={`h-[40%] w-full ${props.bg}`}>
            <div className='flex w-full justify-between px-5 py-8'>
                <h1 className='text-white text-2xl font-semibold'>{props.text}</h1>
                <h1 className='text-white text-2xl font-semibold'>--</h1>
            </div>
            <p className='text-white px-5 mt-[vw]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente incidunt nobis placeat?</p>
        </div>
    </div>
  )
}

export default PageSevenComponents