import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Productos from './components/Productos';
import Sabores from './components/Sabores';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>  {/* Asegúrate de envolver todo en <Router> */}
      <div className="App">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Sabores" element={<Sabores />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
