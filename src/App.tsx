import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home,Rules } from './pages';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rules' element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
