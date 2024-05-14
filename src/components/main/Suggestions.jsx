import React from 'react'

const Suggestions = ({text,icon}) => {
    return (
        <div className='shrink-0 w-52 max-w-52 flex flex-col justify-between rounded-lg shadow shadow-gray-300 bg-slate-50 hover:bg-blue-50 transition duration-500 p-3 cursor-default sm:cursor-pointer'>
            <p className="sm:text-[17px] line-clamp-6">{text}</p>
            <div className=" mt-5 flex items-end justify-end">
                <div className="text-xl sm:text-2xl rounded-full p-2 bg-primary">
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default Suggestions