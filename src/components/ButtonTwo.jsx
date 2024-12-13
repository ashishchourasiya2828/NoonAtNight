import React from 'react'

const ButtonTwo = ({modif,text}) => {
  
  return (
    <div>
        <button id='buttonTwo' className={`px-5 ${modif}  py-3 text-[1.2vw]  rounded-xl font-sans `}> {text}
        </button>
    </div>
  )
}

export default ButtonTwo