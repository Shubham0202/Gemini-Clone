import React, { useContext, useEffect, useRef } from 'react'
import { BiMicrophone, BiSend } from 'react-icons/bi'
import { LuImagePlus } from 'react-icons/lu'
import PromptContext from '../../context/PromptContext';

const Input = () => {
  const inputTag = useRef(null);

  const {
    onSend,
    userInput,
    setUserInput,
    isLoading,
    perMinRequests,
   } = useContext(PromptContext);


  function handleSubmit() {
    if(inputTag.current.value.length !=0)
    onSend(userInput);
  else
  inputTag.current.focus();
  }


  useEffect(() => {
    inputTag.current.focus()
  }, []);
  return (
    <div className='w-full sm:min-w-[75%] sm:max-w-[80%] bg-secondary rounded-full px-4 py-2 flex items-center shadow shadow-gray-300'>
      <input value={userInput} onChange={(e) => setUserInput(e.target.value)} ref={inputTag} type="text" className='input-text w-full outline-none bg-transparent' placeholder='Enter a prompt here' readOnly={(isLoading)?true:false} />
      <div className="input-icons flex items-center gap-2 cursor-default sm:cursor-pointer">
        <div className="image-plus w-fit text-2xl md:text-3xl p-2 rounded-full hover:bg-primary">
          <LuImagePlus />
        </div>
        <div className="image-plus w-fit text-2xl md:text-3xl p-2 rounded-full hover:bg-primary">
          <BiMicrophone />
        </div>
        <div onClick={(perMinRequests !=1) ? handleSubmit:null} className={`image-plus relative w-fit text-2xl md:text-3xl p-2 rounded-full ${(perMinRequests <=5)?'text-red-500':'text-black'} hover:bg-primary`}>
          <p className='text-sm font-bold absolute top-0 right-1'>
          {perMinRequests}
          </p>
          <BiSend />
        </div>
      </div>
    </div>
  )
}

export default Input