import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/second" element={<SecondPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
