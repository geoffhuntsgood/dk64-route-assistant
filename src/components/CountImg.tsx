import { useEffect, useState } from "react";
import bc from "../assets/img/bc.png";
import bean from "../assets/img/bean.png";
import bp from "../assets/img/bp.png";
import fairy from "../assets/img/fairy.png";
import gb from "../assets/img/gb.png";
import key from "../assets/img/key.png";
import medal from "../assets/img/medal.png";
import { Step } from "../classes";

export const CountImg = ({ step }: { step: Step }) => {
  let [img, setImg] = useState(bean);
  let [amount, setAmount] = useState("");

  useEffect(() => {
    if (step.bps) {
      setImg(bp);
      setAmount(step.bps.toString());
    } else if (step.crowns) {
      setImg(bc);
      setAmount(step.crowns.toString());
    } else if (step.fairies) {
      setImg(fairy);
      setAmount(step.fairies.toString());
    } else if (step.gbs) {
      setImg(gb);
      setAmount(step.gbs.toString());
    } else if (step.keys) {
      setImg(key);
      setAmount(step.keys.toString());
    } else if (step.medals) {
      setImg(medal);
      setAmount(step.medals.toString());
    }
  }, []);

  return (
    <>
      <span style={{ float: "right" }}>{amount}</span>
      <img
        src={img}
        height="20"
        style={{ float: "right", margin: "3px 5px" }}
      />
    </>
  );
};
