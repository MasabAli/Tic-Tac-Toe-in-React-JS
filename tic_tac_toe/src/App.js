import logo from './logo.svg';
import { BrowserRouter, Switch, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import NewBoard from './TicTacToeGame/NewBoard';
import Board from './TicTacToeGame/Board';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/single_array" element={<Board />}/>
        <Route path="/mult_array" element={<NewBoard />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
