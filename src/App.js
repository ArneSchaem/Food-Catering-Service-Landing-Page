import Home from "./pages/Home";
import "../src/dist/styles.css";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
