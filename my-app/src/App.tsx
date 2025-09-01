import './App.css'
import profile from './assets/formal-pic.JPG'
import Body from './components/Body'

function App() {

  return (
    <main className='main'>
      <img src={profile} alt="profile" className='profile' />
      <Body className="body" />
    </main>
  )
}

export default App
