import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home,Rules, Quiz, Result } from './pages';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/quiz/:quizId' element={<Quiz />} />
        <Route path='/results' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
