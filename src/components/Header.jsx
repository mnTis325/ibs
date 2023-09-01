import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Header = ({ color, category, title }) => (
  <div className=" mb-4">
    <p className="text-lg mb-1"
        style={{color: color}}
        >{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

export default Header;
