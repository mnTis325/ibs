import React from 'react';
// import {
//   GridComponent,
//   ColumnsDirective,
//   ColumnDirective,
//   Toolbar,
//   Search,
//   Resize,
//   Sort,
//   ContextMenu,
//   Filter,
//   Page,
//   Edit,
//   Inject,
// } from '@syncfusion/ej2-react-grids';
import { Header, Button, Navbar, LineChart } from '../components';
import { Link } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { FiSettings } from 'react-icons/fi';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
// import { 
//   Category, 
//   ChartComponent, 
//   LineSeries, 
//   SeriesCollectionDirective, 
//   SeriesDirective,
//   Legend,
//   DataLabel,
//   ColumnSeries
//  } from '@syncfusion/ej2-react-charts';

const Zoonotic = () => { 
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
/*
  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  */
  return (
    
    <div className='m-2 md:m-6 p-2 md:p-6 bg-white rounded-3xl'>
    {/* <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
      <TooltipComponent content='Settings' position='Top'>
        <button
          type='button'
          onClick={() => setThemeSettings(true)}
          style={{ background: currentColor, borderRadius: '50%' }}
          className='text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray'
        >
          <FiSettings />
        </button>
      </TooltipComponent>
    </div> */}
    {/* <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-100vh '>
    <Navbar />
      </div> */}
      <div className='h-full'>
      <Header category='GeoTags' title='Map Representation' color={currentColor} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-1 h-full text-center'>
      <div>
        {/* <Header category='Name' color={currentColor}/> */}
        <iframe className='h-96 w-full' src="https://charts.mongodb.com/charts-onehealth-cvjms/embed/charts?id=d01fe6da-04d2-4ab4-8fd7-ae47d238ce81&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
      </div>
      <div>
        {/* <Header category='Name' color={currentColor}/> */}
        <iframe className='h-96 w-full'  src="https://charts.mongodb.com/charts-onehealth-cvjms/embed/charts?id=978903c3-98ef-4177-984d-42c7b5a84099&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
      </div>
      <div>
        {/* <Header category='Name' color={currentColor}/> */}
        <iframe className='h-96 w-full'  src="https://charts.mongodb.com/charts-onehealth-cvjms/embed/charts?id=8bf80f0a-8f6f-4eb9-943b-61bbc0e5aef9&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
      </div>
      <div>
        {/* <Header category='Name' color={currentColor}/> */}
        <iframe className='h-96 w-full' src="https://charts.mongodb.com/charts-onehealth-cvjms/embed/charts?id=fc156f8b-1a5b-4acd-a40b-979618e9f634&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
      </div>
      <div>
        {/* <Header category='Name' color={currentColor}/> */}
        <iframe className='h-96 w-full' src="https://charts.mongodb.com/charts-onehealth-cvjms/embed/charts?id=98326900-6b72-4b24-ae51-9c949ff9afc3&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
      </div>
      <div>
        {/* <Header category='Name' color={currentColor}/> */}
        <iframe className='h-96 w-full' src="https://charts.mongodb.com/charts-onehealth-cvjms/embed/charts?id=634f8498-9155-4597-8a75-7c67191884dd&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>                         
      </div>
      </div>
      </div>
    </div>
  );
};

export default Zoonotic;
