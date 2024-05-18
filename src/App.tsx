import { useState } from "react";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { StepList } from "./components/StepList";
import { Route } from "./enums";

const App = () => {
  const [route, setRoute] = useState(Route.None);

  return route === Route.None ?
    <LandingPage setRoute={setRoute} /> :
    <StepList route={route} setRoute={setRoute} />;
};

export default App;
