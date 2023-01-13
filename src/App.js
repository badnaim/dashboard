import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="one">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
