import './App.css'
import Body from './components/Body'
import profileImage from './assets/formal-pic.JPG'

function App() {

  return (
    <main className='main'>
      <img 
        src={profileImage} 
        alt="profile" 
        className='profile'
      />
      <Body className="body" />
    </main>
  )
}

export default App
