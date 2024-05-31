import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import JdrSelection from './pages/JdrSelection';
import JdrHome from './pages/JdrHome';

import './styles/globalStyle.scss';

function App() {
  return (
    <Router>
      <div className="globalStyle">
        <Routes>
          <Route path="/" element={<JdrSelection />} />
          <Route path="/jdr/:id" element={<JdrHome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
