import { RouteInfo } from "../classes";
import { allBeginner } from "./allBeginner";
import { allExpert } from "./allExpert";
import { allIntermediate } from "./allIntermediate";
import { any1Kong2014 } from "./any1Kong2014";
import { any1Kong2015 } from "./any1kong2015";
import { glitchlessAny } from "./glitchlessAny";
import { nle40bp } from "./nle40bp";
import { nleHE } from "./nleHE";
import { taNLE } from "./taNLE";

// ----- 101% -----
export const beginner101: RouteInfo = {
  name: "BEGINNER 101%",
  docUrl: "https://docs.google.com/document/d/1IXTi3nh70Gps8G_BlEo2kquOix47i_qjQ1WKIhCk8n4",
  steps: allBeginner
};

export const intermediate101: RouteInfo = {
  name: "INTERMEDIATE 101%",
  docUrl: "https://docs.google.com/document/d/170Vu0a63Jnlgt1-KnczI5VV0V6omhFNBV9DnnSNYKAs",
  steps: allIntermediate
};

export const expert101: RouteInfo = {
  name: "EXPERT 101% (PWALKS)",
  docUrl: "https://docs.google.com/document/d/1ZCZRdYDDtHwMQmaCej44c1ckG322ydA1ErtLoz-pESY",
  steps: allExpert
};

// ----- any% -----
export const anyPercent2014: RouteInfo = {
  name: "2014 ANY% 1-KONG",
  docUrl: "https://docs.google.com/document/d/1GHJMfpSWSD4Ao5acqLS6hTW-f7oSsLytu9Jb8BxWGF0",
  steps: any1Kong2014
};

export const anyPercent2015: RouteInfo = {
  name: "2015 ANY% 1-KONG",
  docUrl: "https://pastebin.com/ezTY6uAx",
  steps: any1Kong2015
};

// ----- NLE -----
export const nle40: RouteInfo = {
  name: "40BP NO LEVELS EARLY",
  docUrl: "https://docs.google.com/document/d/1FcKiAVEQmdBdrY-bf6sr0WSjzSg5KKoCVlpqhgJff7E",
  steps: nle40bp
};

export const nleHelmEscape: RouteInfo = {
  name: "HELM-ESCAPE NO LEVELS EARLY",
  docUrl: "https://docs.google.com/document/d/102A9Ii0M4ZnCHg_obKMCrL6UUvsG7_yP0MJAo7JCJnQ",
  steps: nleHE
};

// ----- CATEGORY EXTENSIONS -----
// ----- Glitchless -----
export const glitchlessAnyPercent: RouteInfo = {
  name: "ANY% GLITCHLESS",
  docUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRzSfCuMvYruNml5sIQm-Z6pPJr3D5TF_KjdvpJVbOlhGBCctCNb-9LVEJ96vnDeA/pubhtml#",
  steps: glitchlessAny
};

// ----- Tag Anywhere -----
export const tagAnywhereNLE: RouteInfo = {
  name: "NLE TAG ANYWHERE",
  docUrl: "",
  steps: taNLE
};
