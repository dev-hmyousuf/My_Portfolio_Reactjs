import { BrowserRouter as Router, Routes, Route } from '../node_modules/react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Testimonial from './Components/Testimonial/Testimonial';
import About from './Components/Pages/About/About'

const AppRouter = () => {
  return (
    <div className=''>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Testimonial/>
        <Footer/>
      </Router>
    </div>
  );
};

export default AppRouter;
