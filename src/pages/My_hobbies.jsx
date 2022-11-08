import { useState } from "react";
import Dropdown_option from "../component/Dropdown_option";
import "../style/About_me.scss";

const My_hobbies = () => {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);

  console.log(click);

  return (
    <div>
      <div className="about_me">
        <button
          onClick={(e) => {
            e.preventDefault();
            setClick((click) => !click);
          }}
        >
          My gaming skills
        </button>
        {click && (
          <Dropdown_option title="Games I play" description="Valorant, Minecraft, OW2" />
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            setClick1((click1) => !click1);
          }}
        >
          My violin skills
        </button>
        {click1 && (
          <Dropdown_option title="Violin" description="Been doin this for 4 years now" />
        )}
      </div>
    </div>
  );
};

export default My_hobbies;
