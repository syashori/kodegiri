// routes
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

import Soal1 from "./pages/Soal1";
import Soal2 from "./pages/Soal2";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li><Link to="/">Soal PseudoCode</Link></li>
            <li><Link to="soal2">Soal Utama</Link></li>
            <li><Link to="login">Soal Utama - Login</Link></li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<Soal1 />} />
          <Route exact path="soal2" element={<Soal2 />} />
          <Route exact path="login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
