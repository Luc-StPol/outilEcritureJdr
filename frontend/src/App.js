import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { UpdateComponent } from './utils/contexts';

import Header from './components/Header';
import JdrSelection from './pages/JdrSelection';
import JdrHome from './pages/JdrHome';
import AddJdr from './pages/AddJdr';
import JdrMap from './pages/JdrMap';
import JdrPnj from './pages/JdrPnj';
import JdrQuest from './pages/JdrQuest';
import JdrStory from './pages/JdrStory';
import './styles/globalStyle.scss';
import CityMap from './pages/CityMap';
import { useState } from 'react';

function App() {
  const jdrId = sessionStorage.getItem('jdrId');
  const [update, setUpdate] = useState(false);

  if (!jdrId) {
    return (
      <Router>
        <div className="globalStyle">
          <UpdateComponent.Provider value={{ update, setUpdate }}>
            <Routes>
              <Route path="/" element={<JdrSelection />} />
              <Route path="/addjdr" element={<AddJdr />} />
            </Routes>
          </UpdateComponent.Provider>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div className="globalStyle">
          <Header />
          <UpdateComponent.Provider value={{ update, setUpdate }}>
            <Routes>
              <Route path="/" element={<JdrHome />} />
              <Route path="/carte" element={<JdrMap />} />
              <Route path="/carte/lieu/:locationId" element={<CityMap />} />
              <Route path="/pnj" element={<JdrPnj />} />
              <Route path="/quetes" element={<JdrQuest />} />
              <Route path="/histoire" element={<JdrStory />} />
            </Routes>
          </UpdateComponent.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
