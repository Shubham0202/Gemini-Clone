import Suggestions from './Suggestions'
import { BiBulb, BiCode } from 'react-icons/bi';

const Welcome = () => {
  const suggestionText=[
    {

      text:'Teach me the concept of game theory in simple terms. Include real-world examples to illustrate key concepts, and how they have played out in industry.',
      icon: <BiBulb/>
    },
    {

      text:'Teach me the concept of game theory in simple terms. Include real-world examples to illustrate key concepts, and how they have played out in industry.',
      icon: <BiBulb/>
    },
    {
      text: 'what is html ?',
      icon: <BiCode/>
    },
    {
      text: 'what is html ?',
      icon: <BiCode/>
    },
  ]
  return (
    <div className='w-full sm:min-w-[75%] sm:max-w-[75%]'>
      <div className="half-section">
      
      <div className="welcome-msg sm:mt-10">
        <h2 className='text-3xl sm:text-5xl font-bold capitalize mb-3 bg-gradient-to-r from-pink-600 via-amber-500 to-violet-700 bg-clip-text text-transparent'>hello,shubham</h2>
        <h2 className='text-3xl sm:text-5xl font-bold text-gray-300'>How can I help you?</h2>
      </div>

      {/* suggestion */}
      <div className="grid-auto-fit place-items-center gap-4 mt-6">
        {
        suggestionText.map((suggestion,index)=>
          <Suggestions key={index} text={suggestion.text} icon={suggestion.icon}/>
        )
        }
      </div>

      </div>
    </div>
  )
}

export default Welcome