import { BrowserRouter as Router, Routes, Route } from '../node_modules/react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

const AppRouter = () => {
  return (
    <div className=''>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
