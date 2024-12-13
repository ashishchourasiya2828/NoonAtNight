import React from 'react'
import ButtonTwo from './ButtonTwo'
import CurvedEdgesDiv from './CurvedEdgesDiv'

const PageFive = () => {
  return (
    <div className='h-screen w-full px-10 bg-[#E4E4E4] flex flex-col items-center'>
        <div className='w-full flex itmes-center justify-end  mt-[-2vw]'>
        <ButtonTwo modif="bg-[#E4E4E4] border-[1px] border-black" text="All Projects --"/>
        </div>
        <CurvedEdgesDiv height1="h-[75vh]" innerimg="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b6d98261b9aedd2482e_NS_Logo-NaN.jpg" img="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/65492b562e62e676d4159713_NS_Wayfinding%20_%20NaN-p-2000.jpg"/>
        <div className=' w-[100%] mt-[1vw]'>
          <h1 className='text-s text-zinc-400 font-serif'>Nieuw Schaijk</h1>
          <h1 className='text-2xl font-semibold font-sans mt-[-1vh]'>De smaak van thuis</h1>
          <div  >
            <button className='px-3 py-1 rounded-lg bg-[#E4E4E4] border-[1px] border-black text-xs mr-2 mt-1' >BRAND STORY</button>
            <button className='px-3 py-1 rounded-lg bg-[#E4E4E4] border-[1px] border-black text-xs' >MARKIDENTITIET</button>
          </div>
        </div>
    </div>
  )
}

export default PageFive