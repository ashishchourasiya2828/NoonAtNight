import React from 'react'
import ButtonTwo from './ButtonTwo'
import PageSevenComponents from './PageSevenComponents'

const PageSeven = () => {
  return (
    <div className='h-screen px-10 w-full bg-[#F4F4F1]'>
        <div className='w-full flex justify-between items-center px-10 py-8'>
            <h1 className='text-2xl font-semibold'>Zo onderscheiden we je <br />van de norm</h1>
            <ButtonTwo text="Lees meer --" modif="bg-black text-white"/>
        </div>
        <div className='h-[80vh] flex px-2 py-2 gap-4 w-full '>
            <PageSevenComponents bg="bg-[#A483B4]" text="Brand Stroy"  img="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac464ae61273a7c937ded_BRAND%20STORY_Over-Nan-p-500.jpg" />
            <PageSevenComponents bg="bg-[#10100F]" text="Merkidentitiet" img="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e8b3be191fdc49c321d_NaN_Merkidentiteit-p-500.jpg" />
            <PageSevenComponents bg="bg-[#59A770]" text="Webdesign" img="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e7766e8d5682bf6ee25_NaN_Webdesign-p-500.jpg" />
            <PageSevenComponents bg="bg-[#EB9063]" text="A la carte" img="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb43e292b8b8352068a48_NaN_A%20la%20Carte-p-500.jpg" />

        </div>
    </div>
  )
}

export default PageSeven