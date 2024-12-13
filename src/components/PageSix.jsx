import React from 'react'
import PageSixLeft from './PageSixLeft'
import PageSixRight from './PageSixRight'
import ButtonTwo from './ButtonTwo'

const PageSix = () => {
  return (
    <div className='h-[140vh] px-10 w-full   bg-[#E4E4E4]'>
        <div className='h-[90%] w-full gap-5  flex justify-between'>
        <PageSixLeft />
        <PageSixRight />
        </div>
        <div className='bg-white w-[50vw] py-6 items-center rounded-xl mt-[-2vw] flex justify-between px-5'>
            <h1 className='text-xl font-semibold'>Ook aan de slag met jouw merk?</h1>
            <ButtonTwo modif="border-black border-[1px]" text="Let's meet --"/>

        </div>

    </div>
  )
}

export default PageSix