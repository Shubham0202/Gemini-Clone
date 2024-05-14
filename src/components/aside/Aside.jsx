import React, { useContext, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FiActivity, FiChevronDown, FiHelpCircle, FiMenu, FiMessageSquare, FiPlus, FiSettings } from 'react-icons/fi'
import Recent from './Recent'
import { GoDotFill } from 'react-icons/go'
import PromptContext from '../../context/PromptContext'
const Aside = () => {
    const {
        prevPrompts,
        showResult,
        setShowResult,
        isSliderOpen,
        toggleMenu,
    }= useContext(PromptContext);


   
    return (
        <aside className={`${(isSliderOpen?'block':'hidden')} sm:block transition-all absolute sm:relative z-10 duration-500 min-h-[100dvh] h-screen-dvh w-fit ${(isSliderOpen)?'sm:min-w-64 lg:min-w-80':'w-fit'} max-w-80 p-4 bg-secondary`}>
            <div className={`adjust-sections-3-4 flex flex-col ${(isSliderOpen)?'items-start':'items-center'} justify-between h-full`}>
    
                <div className="section-3">
                    <FiMenu onClick={toggleMenu} className='menuIcon text-5xl hover:bg-secondary transition duration-300 p-3 rounded-full' />
                    
                    <button onClick={()=>(showResult)? setShowResult(false):setShowResult(true)} className='mt-10 flex items-center gap-2 capitalize font-semibold py-2 px-4 rounded-full bg-slate-200'>
                        <FiPlus className='text-2xl' />
                        {
                            (isSliderOpen)&&
                            <span>new chat</span>
                        }
                    </button>
                    
                    {
                        (isSliderOpen)&& <div className="mt-6">
                        <h3 className="recent mb-3">Recent</h3>
                        {/* search history */}
                        <ul className="max-h-[22rem] overflow-hidden hover:overflow-y-scroll">
                            {
                                prevPrompts.map((prompt,i)=>{
                                   return <Recent key={i} isActiveFunction={true} firstIcon={<FiMessageSquare />} lastIcon={<BsThreeDotsVertical />} text={prompt.title} />
                                })
                            }
                            <Recent firstIcon={<FiChevronDown />} text='Show More' textClassName='text-sm' componentClassName='bg-transparent' isactiveLastIcon={false} />
                        </ul>
                    </div>
                    }
                   
                </div>
                
                <div className={`section-4 w-full`}>
                    <Recent firstIcon={<FiHelpCircle />} lastIcon={<GoDotFill className='text-red-500'/>} text={(isSliderOpen)?`help`:''} componentClassName={`bg-transparent ${(!isSliderOpen)&& 'justify-center'}`}  isactiveLastIcon={(!isSliderOpen)?false:true} />
                    <Recent firstIcon={<FiActivity />} text={(isSliderOpen)?`activity`:''} componentClassName={`bg-transparent ${(!isSliderOpen)&& 'justify-center'}`} isactiveLastIcon={false} />
                    <Recent firstIcon={<FiSettings />} text={(isSliderOpen)?`settings`:''} componentClassName={`bg-transparent ${(!isSliderOpen)&& 'justify-center'}`} isactiveLastIcon={false} />
                </div>
            </div>
        </aside>
    )
}

export default Aside