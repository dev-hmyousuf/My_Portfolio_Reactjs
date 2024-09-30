import Experiance from './Components/Experiance'
import Overview from './Components/Overview'
import Tabs from '../../Home/Components/Tabs'

const About = () => {
  return (
    <>
      <div className="bg-mainBg">
        <Overview/> 
        <Experiance/>
        <Tabs/>
      </div>
    </>
  )
}

export default About

