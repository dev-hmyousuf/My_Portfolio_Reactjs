import About from './About'
import Hero from './Hero'
import Portfolio from './Portfolio'
import Service from './Service'
import Tabs from './Tabs'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <>
      <div className="bg-mainBg">
        <Hero/> 
      </div>
      <Service/>
      <About/>
      <Tabs/>
      <Portfolio/>
      <Testimonial/>
    </>
  )
}

export default Home

