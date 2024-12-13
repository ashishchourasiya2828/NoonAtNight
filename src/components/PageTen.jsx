import React from 'react'

const PageTen = () => {
  return (
    <div className='h-[50vh] w-full bg-[#F4F4F1] px-10 py-10'>
        <div className='border-black border-b-2'>
            <h1 className='text-2xl font-semibold '>Did some cool stuff for</h1>
        </div>
        <div className='flex items-center justify-between w-full'>
            <h1 className='text-2xl text-zinc-400 font-semibold'>Bewakingsdienst van MOOK <br />Van der Heijden bouw <br />Speyz <br />kbvolsn </h1>
            <img id='smile' src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64bbbf416decd23360ebb88c_get-in-touch-badge.svg" loading="lazy" alt="" class="image"></img>
        </div>
    </div>
  )
}

export default PageTen