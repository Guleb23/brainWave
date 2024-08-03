import Benefits from './Components/Benefits'
import Collabaration from './Components/Collabaration'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Roadmap from './Components/Roadmap'
import Services from './Components/Services'
const App = () => {

  return (
    <>
      <div className='pt-18 lg:pt-20 overflow-hidden'>
        <Header />
        <Hero />
        <Benefits />
        <Collabaration />
        <Services />
        <Roadmap />\
        <Footer />
      </div>
    </>
  )
}

export default App
