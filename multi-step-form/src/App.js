import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StepOne, StepTwo, StepThree } from "./pages";

function App() {
  return (
    <div className="mainOuterDiv">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StepOne />} />
          <Route path="/select-plan" element={<StepTwo />} />
          <Route path="/add-ons" element={<StepThree />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
