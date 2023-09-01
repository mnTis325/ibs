import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Toolbar,
  Search,
  Resize,
  ContextMenu,
  Filter,
  Page,
  Inject,
} from '@syncfusion/ej2-react-grids';
import {
  contextMenuItems,
  diseasesGrid,
  dataSourcesGrid,
  dataSourcesData,
  importantLinksData,
} from '../data/dummy';
import { Header, Navbar } from '../components';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { useStateContext } from '../contexts/ContextProvider';

const DataSources = () => {  
  const {
  setCurrentColor,
  setCurrentMode,
  currentMode,
  activeMenu,
  currentColor,
  themeSettings,
  setThemeSettings,
} = useStateContext();

// useEffect(() => {
//   const currentThemeColor = localStorage.getItem('colorMode');
//   const currentThemeMode = localStorage.getItem('themeMode');
//   if (currentThemeColor && currentThemeMode) {
//     setCurrentColor(currentThemeColor);
//     setCurrentMode(currentThemeMode);
//   }
// }, []);

  return (
    <div className='m-2 md:m-6 p-2 md:p-6 bg-white rounded-3xl'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
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
    </div>
      {/* <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
    <Navbar />
      </div> */}
      <Header className={'mb-4 mt-2'} title='Important Links' />

      <Header category='Data Sources' color={currentColor}/>
      <GridComponent
      id='1'
      dataSource={dataSourcesData}
      allowSorting={false}
      >
        <ColumnsDirective>
          {dataSourcesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </GridComponent>
      {/* <GridComponent
        id='gridcomp'
        dataSource={dataSourcesData}
        allowSorting={false}
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {dataSourcesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Search, Toolbar, Resize, ContextMenu, Filter, Page]}
        />
      </GridComponent> */}
      {/* <iframe title='dataSource' width="100%" height="400" src="https://charts.mongodb.com/charts-onehealth-cvjms/embed/charts?id=ebcbae1b-cf82-471d-b7a4-150207a4b101&maxDataAge=3600&theme=light&autoRefresh=true"></iframe> */}

      <div className='mt-4'>
      <Header category="Links"/>
      <GridComponent
        id='gridcomp1'
        dataSource={importantLinksData}
        allowSorting={false}
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {dataSourcesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Search, Toolbar, Resize, ContextMenu, Filter, Page]}
        />
      </GridComponent>
      {/* <iframe title='dataSource' width="100%" height="400" src="https://charts.mongodb.com/charts-onehealth-cvjms/embed/charts?id=63e6f0c3-1086-47bc-8335-2973fc569705&maxDataAge=3600&theme=light&autoRefresh=true"></iframe> */}
      </div>
    </div>
  );
};

export default DataSources;
