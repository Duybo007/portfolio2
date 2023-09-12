import { BrowserRouter } from "react-router-dom"
import { Navbar, Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas } from './components'

function App() {
  const userAgent = window.navigator.userAgent.toLowerCase();

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          {/* {userAgent.includes('firefox') && (
            <StarsCanvas />
          )} */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
