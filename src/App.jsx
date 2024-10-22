import './App.css'

import { Route, Routes} from 'react-router-dom';
import Home from './home/Home';
import Register from './camponants/Register';
import Model_login from './camponants/Model_login';
import Navbar from './camponants/Navbar';



function App() {
  

  return (
   <>
   
   <Navbar/>
   <Routes >
    <Route path='/feedback' element={<Feedback/>} />
     </Routes>
   </>
  )
}

export default App