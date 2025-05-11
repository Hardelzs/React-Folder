import React from 'react';
import tick from '../assets/tick.png';
import notCheck from '../assets/notCheck.png';
import cross from '../assets/cross.png';

const TodoItem = ({ no, display, text }) => { // Correctly destructure props
  return (
    <div>
      <div>
        <img src={notCheck} alt="" />
        <img src={tick} alt="" />
        <div>{text}</div>
      </div>
      <img src={cross} alt="" />
    </div>
  );
};

export default TodoItem;