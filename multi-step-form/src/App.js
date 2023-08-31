import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StepOne, StepTwo, StepThree, StepFour, StepFive } from "./pages";

function App() {
  return (
    <div className="mainOuterDiv">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StepOne />} />
          <Route path="/select-plan" element={<StepTwo />} />
          <Route path="/add-ons" element={<StepThree />} />
          <Route path="/summary" element={<StepFour />} />
          <Route path="/thank-you" element={<StepFive />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
