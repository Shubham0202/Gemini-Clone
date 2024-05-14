import './App.css'
import Aside from './components/aside/Aside'
import Main from './components/main/Main'
// import run from './Config/gemini1.0'
// import runWithDelay from './hooks/useGemini'
function App() {
 
  return (
    <div className='flex items-start'>
    <Aside/>
    <Main/>
    </div>
  )
}

export default App
