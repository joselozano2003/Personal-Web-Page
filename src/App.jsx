import React, { useState, useEffect} from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Personal from './components/Personal'

function App() {
  const [isMobile, setIsMobile] = useState(false)

  
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 868) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <Navbar platform/>
      <Hero/>
      <Personal platform={isMobile}/>
    </div>
  )
}

export default App
