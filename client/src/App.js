import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
