import React from "react";
import BtnSound from "../../../common/sound/buttonClick.mp3";
interface Props {
  text: string;
  color?: string;
  onClick(): void;
}
function Button({ text, color, onClick }: Props) {
  const style = {
    backgroundColor: color || "#ecb172",
    fontFamily: "kotra",
    borderRadius: "0.8rem",
    padding: "1rem",
    fontSize: "1rem",
    margin: " 0 0.5rem ",
  };
  const btnClick = new Audio(BtnSound);
  function buttonClick() {
    btnClick.play();
    onClick();
  }
  return (
    <button style={style} onClick={buttonClick}>
      {text}
    </button>
  );
}

export default Button;
