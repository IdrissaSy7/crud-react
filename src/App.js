import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
