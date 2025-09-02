import './App.css'
import Body from './components/Body'

function App() {

  return (
    <main className='main'>
      <img 
        src="/portfolio/formal-pic-optimized.jpg" 
        alt="profile" 
        className='profile'
      />
      <Body className="body" />
    </main>
  )
}

export default App
