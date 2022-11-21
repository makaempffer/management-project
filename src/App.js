import './App.css';
import NavBar from './components/NavBar';
import Project from './components/Project';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-blueCustom w-screen h-screen'>
        <NavBar />
        <Routes>
          <Route path='/projects' element={<Project />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
