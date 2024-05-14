import React, { useContext, useState } from 'react'
import PromptContext from '../../context/PromptContext';
import Loader from '../Loader';
import logo from '../../assets/logo.svg'
import Markdown from 'react-markdown';
import { HiOutlineSpeakerWave } from 'react-icons/hi2';
import { FaRegStopCircle } from 'react-icons/fa';

const Output = () => {
    const [isSpeak, setIsSpeak] = useState(false);
    const {
        currentInput,
        isLoading,
        resultData,
    } = useContext(PromptContext);

    const speak = () => {

        let synth = window.speechSynthesis;
        let voice = new SpeechSynthesisUtterance(resultData);
        const voices = speechSynthesis.getVoices();
        voice.voice = voices[3]
        if (!isSpeak && !synth.paused) {
            console.log("play")
            setIsSpeak(true);
            voice.onend = () => setIsSpeak(false);
            synth.speak(voice);
        }
        else {
            setIsSpeak(false);
            synth.cancel();
        }

    }
    return (
        <div className='w-full sm:min-w-[75%] sm:max-w-[75%]'>
            <div className="content">
                <h2 className="text-lg font-bold capitalize">{currentInput}</h2>
                {
                    (isLoading) ? <Loader />
                        : <div className='flex items-start gap-2'>
                            <img src={logo} alt="logo" className='animate-spin' />
                            {/* <p className='mt-2' dangerouslySetInnerHTML={{__html:resultData}}></p> */}
                            <Markdown className={'prose prose-blue'}>{resultData}</Markdown>
                            <div onClick={speak} className="text-2xl p-2 rounded-full hover:bg-hover">
                                {
                                    (isSpeak) ? <FaRegStopCircle /> : <HiOutlineSpeakerWave />
                                }
                            </div>
                        </div>
                }
            </div>

        </div>
    )
}

export default Output