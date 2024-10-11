import { Route, Routes, useLocation } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { StepList } from "./components/StepList";
import {
  allBeginner,
  allExpert,
  allIntermediate,
  any1Kong2014,
  any1Kong2015,
  any5Kong,
  anyAllKeys,
  anyNoISG,
  glitchless101,
  glitchlessAny,
  moveless100GB,
  nle40bp,
  nleHE,
  nleIntermediate,
  ta101,
  taNLE
} from "./lists";

const App = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LandingPage />} />

      {/* ANY% */}
      <Route path="/route/any5kong" element={<StepList name="ANY% 5-KONG" route={any5Kong} />} />
      <Route path="/route/any1kong2014" element={<StepList name="ANY% 1-KONG 2014" route={any1Kong2014} />} />
      <Route path="/route/any1kong2015" element={<StepList name="ANY% 1-KONG 2015" route={any1Kong2015} />} />

      {/* 101% */}
      <Route path="/route/101beginner" element={<StepList name="101% BEGINNER" route={allBeginner} />} />
      <Route path="/route/101intermediate" element={<StepList name="101% INTERMEDIATE" route={allIntermediate} />} />
      <Route path="/route/101expert" element={<StepList name="101% EXPERT" route={allExpert} />} />

      {/* NLE */}
      <Route path="/route/nleintermediate" element={<StepList name="NLE INTERMEDIATE" route={nleIntermediate} />} />
      <Route path="/route/nleadvanced40bp" element={<StepList name="NLE ADVANCED 40BP" route={nle40bp} />} />
      <Route path="/route/nlehelmescape" element={<StepList name="NLE HELM ESCAPE" route={nleHE} />} />

      {/* EXTENSIONS */}
      <Route path="/route/anyglitchless" element={<StepList name="ANY% GLITCHLESS" route={glitchlessAny} />} />
      <Route path="/route/101glitchless" element={<StepList name="101% GLITCHLESS" route={glitchless101} />} />
      <Route path="/route/nletaganywhere" element={<StepList name="NLE TAG ANYWHERE" route={taNLE} />} />
      <Route path="/route/101taganywhere" element={<StepList name="101% TAG ANYWHERE" route={ta101} />} />
      <Route path="/route/anynoisg" element={<StepList name="ANY% NO ISG" route={anyNoISG} />} />
      <Route path="/route/anyallkeys" element={<StepList name="ANY% ALL KEYS" route={anyAllKeys} />} />
      <Route path="/route/moveless100gb" element={<StepList name="100 GB MOVELESS" route={moveless100GB} />} />
    </Routes>
  )
};

export default App;
