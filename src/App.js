
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieShow from './MovieShow';
import Header from './Header-Folder/Header';
import Login from './commponent.home/account/Login';
import Register from './commponent.home/account/Register';
import Home from './commponent.home/Home-Folder/Home';
import Movies from './commponent.home/Home-Folder/Movies';
import Tv from './commponent.home/Home-Folder/Tv';






function App() {
  return (
    <>
    
     <Header/>
      
      <div className='container-fluid'>
      
          <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/movieshow' element={<MovieShow/>} >
          <Route path=':id' element={<MovieShow/>}/>

          </Route>

          <Route path='movies' element={<Movies/>}/>
        
          <Route path='tv' element={<Tv/>}/>
         
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
     
       



          </Routes>
     
      </div>
      

    </>
  );
}

export default App;
