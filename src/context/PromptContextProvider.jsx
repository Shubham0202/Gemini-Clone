import React, { useEffect, useState } from "react";
import PromptContext from "./PromptContext";
import runChat from "../Config/gemini1.0";

const PromptContextProvider = ({children}) => {


  const [userInput,setUserInput] = useState('');
  const [prevPrompts,setPrevPrompts] = useState([]);
  const [showResult,setShowResult] = useState(false); //hiding for first laoding output comp.
  const [isLoading,setIsLoading] = useState(false);
  const [resultData,setResultData] = useState('');
  const [currentInput,setCurrentInput] = useState('');
  const [perMinRequests,setPerMinRequests] = useState(15);

  // aside open close state
  const [isSliderOpen,setIsSliderOpen] = useState(false);
    
  // api main working function 
  async function onSend(input){
    setResultData('');
    setIsLoading(true);
    setShowResult(true);
    setCurrentInput(input);
    const response = await runChat(input);
   //visible response data to user 
    setResultData(response);
    // decrease perMinuteRequests count
    setPerMinRequests(perMinRequests-1);
    setIsLoading(false);
    // setting title and response in the form of object into prevPrompts
    const obj = {
      title: input,
      data: response,
    }
    setPrevPrompts(prev=>[...prev,obj]);
    console.log(input,prevPrompts);
    setUserInput('');
  }

// aside slider open close function

const toggleMenu= ()=>{
  if(!isSliderOpen)
      setIsSliderOpen(true);
  else
      setIsSliderOpen(false);
    console.log(isSliderOpen);
}


// global object

    const contextValue = {
      prevPrompts,
        setPrevPrompts,
        onSend,
        userInput,
        setUserInput,
        showResult,
        setShowResult,
        isLoading,
        resultData,
        setResultData,
        currentInput,
        setCurrentInput,
        toggleMenu,
        isSliderOpen,
        perMinRequests,
    }

    useEffect(()=>{
      setInterval(()=>{
        setPerMinRequests(15);
      },60000)
    },[setPerMinRequests])
    return (
    <PromptContext.Provider value={contextValue}>
        {children}
    </PromptContext.Provider>
  )
}

export default PromptContextProvider