import { Route, Routes, useLocation } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { StepList } from "./components/StepList";

const App = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/route" element={<StepList />} />
    </Routes>
  )
};

export default App;
