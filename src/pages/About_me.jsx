import "../style/About_me.scss";
import { useState } from "react";
import Dropdown_option from "../component/Dropdown_option";

const About_me = () => {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);

  console.log(click);

  return (
    <div>
      <h1>Please note that none of this information will be true</h1>
      <div className="about_me">
        <button onClick={(e) => {
          e.preventDefault()
          setClick(click => !click)
        }} >Check out my birthday!</button>
        {click && <Dropdown_option title="Birth date" description="May 23 2021" />}
        <button onClick={(e) => {
          e.preventDefault()
          setClick1(click1 => !click1)
        }} >Check out my passport number!</button>
        {click1 && <Dropdown_option title="Passport number" description="Deez nuts" />}
      </div>
    </div>
  );
};

export default About_me;
