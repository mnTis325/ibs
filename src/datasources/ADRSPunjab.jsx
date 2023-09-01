import React, {useEffect} from 'react';
import {
  contextMenuItems,
  diseasesGrid,
  dataSourcesGrid,
  dataSourcesData,
  importantLinksData,
} from '../data/dummy';
import { Header, Navbar } from '../components';
import { FiSettings } from 'react-icons/fi';
import { useStateContext } from '../contexts/ContextProvider';

const ADRSPunjab = () => {  
  const {
  setCurrentColor,
  setCurrentMode,
  currentMode,
  activeMenu,
  currentColor,
  themeSettings,
  setThemeSettings,
} = useStateContext();

return (
<div className='m-2 md:m-6 p-2 md:p-6 bg-white rounded-3xl'>
  <Header category='Data Source' title='ADRS - Punjab (Coming Soon)' color={currentColor}/>
  <div className='mt-4 w-auto md:w-auto h-auto'>
    <p className='text-left w-auto md:w-auto h-auto'>Livestock & Dairy Development Department, Government of Punjab, Pakistan</p>
    </div>
  </div>
    )
};

export default ADRSPunjab;
