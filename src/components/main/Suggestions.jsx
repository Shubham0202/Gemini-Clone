import React, { useContext, useRef } from 'react'
import PromptContext from '../../context/PromptContext'

const Suggestions = ({text,icon}) => {
    const suggesionTextRef = useRef();
    const {
        setUserInput
    } = useContext(PromptContext);
    const handleSuggestions =()=>{
        setUserInput(suggesionTextRef.current.innerText);
    }
    return (
        <div onClick={handleSuggestions} className='shrink-0 w-52 h-52 flex flex-col justify-between rounded-lg shadow shadow-gray-300 bg-slate-50 hover:bg-blue-50 transition duration-500 p-3 cursor-default sm:cursor-pointer'>
            <p ref={suggesionTextRef} className="sm:text-[17px] line-clamp-6">{text}</p>
            <div className=" mt-5 flex items-end justify-end">
                <div className="text-xl sm:text-2xl rounded-full p-2 bg-primary">
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default Suggestions