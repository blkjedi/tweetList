
import './App.css'
import TweetList from './components/TweetList'
import img from './assets/teapot.png'

function App() {
  
  return (
    <>
    <main>
      <div className='teapot'>Teapot  <img className='imgs' src={img} alt="" /></div>
      <TweetList/>
      </main>
    </>
  )
}

export default App
