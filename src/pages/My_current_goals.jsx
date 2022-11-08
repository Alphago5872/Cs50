import "../style/About_me.scss";
import { useState } from "react";
import Dropdown_option from "../component/Dropdown_option";

const My_current_goals = () => {
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
          My dream university
        </button>
        {click && (
          <Dropdown_option title="Harvard" description="They offer good education and I am also doing cs50x" />
        )}
        <button
          onClick={(e) => {
            e.preventDefault();
            setClick1((click1) => !click1);
          }}
        >
          My dream job
        </button>
        {click1 && (
          <Dropdown_option title="Front end developer" description="Currently working on react as you can see by the encrypted files thanks to npm run build" />
        )}
      </div>
    </div>
  );
};

export default My_current_goals;
