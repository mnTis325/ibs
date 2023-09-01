import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const SubHeading = ({ icon, bgColor, color, bgHoverColor, position, size, text, borderRadius, width, border }) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <div
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`m-1 focus-ring ring-gray-300 focus:outline-none border-${border} border-gray-500 rounded-xl px-1 text-${size} text-${position} w-${width} hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </div>
  );
};

export default SubHeading;
