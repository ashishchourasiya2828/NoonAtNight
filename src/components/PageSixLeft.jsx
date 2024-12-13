import React from 'react'
import CurvedEdgesDiv from './CurvedEdgesDiv'
import PageSixLower from './PageSixLower'

const PageSixLeft = (props) => {

  return (
    <div className={`h-full w-[45%] `} >
        <CurvedEdgesDiv height1="h-[75vh]" innerimg="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64b7f94076df56f95d20243d_GAAF_DowntoEarth-min-p-2000.jpg" img="https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac65e2bf6eb87608fe500_GC_Flyers-Nan-min-p-2000.jpg"/>
        <PageSixLower text1="Gaaf Creaties" text2="Creating mood-boosting experience"/>
    </div>
  )
}

export default PageSixLeft