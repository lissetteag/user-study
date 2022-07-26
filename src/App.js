import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Survey from "./pages/Survey";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route name="Home" path="/" element={<Home />} />
          <Route name="Survey" path="/survey" element={<Survey />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
