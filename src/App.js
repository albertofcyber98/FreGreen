import Homepage from './pages/Home'
import { Routes, BrowserRouter, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
