import './App.css'
import Body from './components/Body'

function App() {

  return (
    <main className='main'>
      <img 
        src="/portfolio/formal-pic.png" 
        alt="profile" 
        className='profile'
        loading="eager"
        decoding="sync"
        style={{ imageRendering: 'auto' }}
      />
      <Body className="body" />
    </main>
  )
}

export default App
