import { RouteInfo } from "../classes";
import { allBeginner } from "../lists/allBeginner";
import { allExpert } from "../lists/allExpert";
import { allIntermediate } from "../lists/allIntermediate";
import { any1Kong2014 } from "../lists/any1Kong2014";
import { any1Kong2015 } from "../lists/any1kong2015";
import { any5Kong } from "../lists/any5Kong";
import { glitchlessAll } from "../lists/WIPglitchlessAll";
import { glitchlessAny } from "../lists/glitchlessAny";
import { nle40bp } from "../lists/nle40bp";
import { nleHE } from "../lists/nleHE";
import { nleIntermediate } from "../lists/nleIntermediate";
import { ta101 } from "../lists/ta101";
import { taNLE } from "../lists/taNLE";
import { taNLEIntermediate } from "../lists/taNLEIntermediate";

// ----- 101% -----
export const beginner101: RouteInfo = {
  name: "101 BEGINNER",
  docUrl: "https://docs.google.com/document/d/1IXTi3nh70Gps8G_BlEo2kquOix47i_qjQ1WKIhCk8n4",
  sections: allBeginner
};

export const intermediate101: RouteInfo = {
  name: "101 INTERMEDIATE",
  docUrl: "https://docs.google.com/document/d/170Vu0a63Jnlgt1-KnczI5VV0V6omhFNBV9DnnSNYKAs",
  sections: allIntermediate
};

export const expert101: RouteInfo = {
  name: "101 EXPERT",
  docUrl: "https://docs.google.com/document/d/1ZCZRdYDDtHwMQmaCej44c1ckG322ydA1ErtLoz-pESY",
  sections: allExpert
};

// ----- any% -----
export const anyPercent5Kong: RouteInfo = {
  name: "ANY% 5-KONG",
  docUrl: "https://docs.google.com/document/d/1RUVlR1d1uts04_2vc1uSO4NcoKi3LMY6bad2QaWipTE/edit#heading=h.b4sluqrauq05",
  sections: any5Kong
};

export const anyPercent2014: RouteInfo = {
  name: "ANY% 1-KONG (2014)",
  docUrl: "https://docs.google.com/document/d/1GHJMfpSWSD4Ao5acqLS6hTW-f7oSsLytu9Jb8BxWGF0",
  sections: any1Kong2014
};

export const anyPercent2015: RouteInfo = {
  name: "ANY% 1-KONG (2015)",
  docUrl: "https://pastebin.com/ezTY6uAx",
  sections: any1Kong2015
};

// // ----- NLE -----
export const nleIntermediate40BP: RouteInfo = {
  name: "NLE INTERMEDIATE",
  docUrl: "https://docs.google.com/document/d/1FcKiAVEQmdBdrY-bf6sr0WSjzSg5KKoCVlpqhgJff7E",
  sections: nleIntermediate
};

export const nle40: RouteInfo = {
  name: "NLE 40BP",
  docUrl: "https://docs.google.com/document/d/1FcKiAVEQmdBdrY-bf6sr0WSjzSg5KKoCVlpqhgJff7E",
  sections: nle40bp
};

export const nleHelmEscape: RouteInfo = {
  name: "NLE HELM ESCAPE",
  docUrl: "https://docs.google.com/document/d/102A9Ii0M4ZnCHg_obKMCrL6UUvsG7_yP0MJAo7JCJnQ",
  sections: nleHE
};

// ----- CATEGORY EXTENSIONS -----
// ----- Glitchless -----
export const glitchlessAnyPercent: RouteInfo = {
  name: "GLITCHLESS ANY%",
  docUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vRzSfCuMvYruNml5sIQm-Z6pPJr3D5TF_KjdvpJVbOlhGBCctCNb-9LVEJ96vnDeA/pubhtml#",
  sections: glitchlessAny
};

export const glitchless101: RouteInfo = {
  name: "GLITCHLESS 101%",
  docUrl: "",
  sections: glitchlessAll
};

// ----- Tag Anywhere -----
export const tagAnywhereMedNLE: RouteInfo = {
  name: "TA NLE INTERMEDIATE",
  docUrl: "",
  sections: taNLEIntermediate
};

export const tagAnywhereNLE: RouteInfo = {
  name: "TA NLE ADVANCED",
  docUrl: "",
  sections: taNLE
};

export const tagAnywhere101: RouteInfo = {
  name: "TA 101%",
  docUrl: "",
  sections: ta101
};
