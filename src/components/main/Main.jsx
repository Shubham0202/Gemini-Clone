import React, { useContext } from 'react'
import UserAccount from './UserAccount'
import { FiChevronDown, FiMenu } from 'react-icons/fi'
import Input from './Input'
import PromptContext from '../../context/PromptContext'
import Welcome from './Welcome'
import Output from './Output'
const Main = () => {
  const {
    showResult,
    toggleMenu,
    
    } = useContext(PromptContext);

  return (
    <main className='w-screen p-4 pb-0 h-screen-dvh overflow-scroll flex flex-col justify-between items-start'>
      {/* top  */}
      <div className="top w-full">
        <section className="flex items-start justify-between">
        <FiMenu onClick={toggleMenu} className='menuIcon block sm:hidden text-5xl hover:bg-secondary transition duration-300 p-3 rounded-full' />
                    
          <div className="flex items-center gap-3 font-semibold text-xl cursor-default sm:cursor-pointer hover:bg-slate-50 px-3 py-2 rounded-lg hover:shadow hover:shadow-gray-200 transition duration-300 border text-nowrap">
            <h2 className="gemini capitalize">gemini 1.0</h2>
            <FiChevronDown />
          </div>
          <UserAccount />
        </section>
        <section className='grid place-items-center'>
          {
            (!showResult)?<Welcome />:<Output/>

          }
        </section>
      </div>

      {/* bottom side*/}
      {/* search */}
      <section className='py-2 bg-primary w-full sticky bottom-0 grid place-items-center'>
        <Input />
        <p className="text-sm text-center text-zinc-600">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
      </section>
    </main>
  )
}

export default Main