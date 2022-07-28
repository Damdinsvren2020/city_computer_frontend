import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai"

function Loading() {
    return (
        <div className='w-full h-full absolute bg-gray-400'>
            <AiOutlineLoading3Quarters className='animate-spin' />
        </div>
    )
}

export default Loading