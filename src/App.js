import './App.css';

import Navb from './Components/Navb';
import Dummy from './Components/Dummy';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Movie from './Components/Movie';
import  Form  from './Components/Form';

function App() {
  return (
   <>
   <Navb/>
   {/* <MovielistContainer/> */}

   <Router>
   <Routes>
   <Route  path='/' element={<Dummy/>}/>
   <Route path='/movie/:id' element={<Movie/>}/>
   <Route path='/movie/:id/form' element={<Form/>}/>
  </Routes>
  </Router>
   </>
  );
}

export default App;
