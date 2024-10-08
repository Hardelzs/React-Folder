import { useState } from "react";
import './CSS/Accordion.css'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="p-4">
      <div className="main flex cursor-pointer space-x-96 bg-emerald-800 p-4 " onClick={() => setIsActive(!isActive)}>
        <div className="">{title}</div>
        <div className="" >{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;