import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Search,  Resize, ContextMenu, Filter, Page, ExcelExport, PdfExport, Inject} from '@syncfusion/ej2-react-grids';
import { definitionsData, contextMenuItems, definitionsGrid } from '../data/dummy';
import { Header, Navbar } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

function Definitions() {  
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
    {/* <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
    <Navbar />
      </div> */}
      <Header title={'Definitions' } color={currentColor}/>         

      <GridComponent id='gridcomp'
      dataSource={definitionsData}
      allowSorting
      toolbar={['Search']}
      width='auto'
      >
      <ColumnsDirective>
      {definitionsGrid.map((item, index) => (
        <ColumnDirective key={index} {... item}/>
      ))}
      </ColumnsDirective>
      <Inject services={[Search, Toolbar, Resize, ContextMenu, Filter, Page, ExcelExport, PdfExport]}/>
    </GridComponent>
    {/* <iframe title='definition' width="100%" height="1920" src="https://charts.mongodb.com/charts-onehealth-cvjms/embed/charts?id=63e6f4f2-1086-4e24-810e-2973fc59bc1c&maxDataAge=3600&theme=light&autoRefresh=true"></iframe> */}
    </div>
  );
};

export default Definitions;