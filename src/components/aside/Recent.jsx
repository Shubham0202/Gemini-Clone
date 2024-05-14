import React, { useContext } from 'react'
import PromptContext from '../../context/PromptContext';
const Recent = ({isActiveFunction = false,firstIcon,lastIcon,text="No Text",isactiveLastIcon=true,componentClassName='',textClassName=''}) => {
    const {
        prevPrompts,
        setResultData,
        setShowResult,
        setCurrentInput,
    }= useContext(PromptContext);
   
    function handleRecentClick(e)
    {
        const search = e.target.innerText.toLowerCase();
        const res = prevPrompts.find(item=>item.title ==search)
        // console.log(res);
        
        const title = res.title;
        const data = res.data;
        // if user click on new chat and then trying to access the recent it will be not shown to user because the output screen is not visible to visible that i'll setshowResult(true) 
        // means show output screen 
        setShowResult(true);
        setCurrentInput(title);
        setResultData(data);

    }
    return (
        // add isActive code for this li and convert this li into NavLink
        // if isActive bg-blue-100 //i am adding this bg by default in li remove it first
        <li className={`${componentClassName} group/item cursor-default sm:cursor-pointer rounded-full px-3 mb-1 hover:bg-gray-200 bg-blue-100 flex items-center gap-2 duration-300`}>
            <div className="svg-icon text-xl">
                {firstIcon}
            </div>
            <p onClick={isActiveFunction ? handleRecentClick:null} className={`${textClassName} line-clamp-1 py-2 capitalize w-full`}>{text}</p>
            {(isactiveLastIcon) &&
                <div className="svg-icon rounded-full hover:bg-white p-1 opacity-0 group-hover/item:opacity-100 transition duration-500">
                {lastIcon}
            </div>            
            }
                
        </li>
    )
}

export default Recent