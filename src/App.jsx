import "./index.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Personal from './components/Personal'
import Technologies from './components/Technologies'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Personal />
      <Technologies/>
      <Portfolio/>
    </div>
  )
}

export default App
