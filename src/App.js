import React, { useEffect } from 'react'
import './App.css';
import { FiSettings } from 'react-icons/fi';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, ThemeSettings } from "./components";
import { useStateContext } from './contexts/ContextProvider';

//Pages
import Home from './pages/Home';
import GeoTags from './pages/GeoTags';
import Definitions from './pages/Definitions';
import DataSources from './pages/DataSources';
import Zoonotic from './diseases/Zoonotic/Zoonotic';
import VectorBorne from './diseases/VectorBorne/VectorBorne';
import WaterBorne from './diseases/WaterBorne/WaterBorne';
import Pandemic from './diseases/Pandemic/Pandemic';

//Charts etc
import MapPage from './pages/MapPage';


//Diseases
//Zoonotic
import Anthraxes from './diseases/Zoonotic/Anthraxes';
import BovineTuberculoses from './diseases/Zoonotic/BovineTuberculoses';
import Brucelloses from './diseases/Zoonotic/Brucelloses';
import Rabies from './diseases/Zoonotic/Rabies';
import Salmonelloses from './diseases/Zoonotic/Salmonelloses';
import DogBites from './diseases/Zoonotic/DogBites';

//VectorBorne
import CCHFs from './diseases/VectorBorne/CCHFs';
import Chikungunyas from './diseases/VectorBorne/Chikungunyas';
import Dengues from './diseases/VectorBorne/Dengues';
import Leishmaniases from './diseases/VectorBorne/Leishmaniases';
import Malarias from './diseases/VectorBorne/Malarias';
import Zikas from './diseases/VectorBorne/Zikas';

//Waterborne
import Amebiases from './diseases/WaterBorne/Amebiases';
import Choleras from './diseases/WaterBorne/Choleras';
import Hepatitises from './diseases/WaterBorne/Hepatitises';
import Typhoids from './diseases/WaterBorne/Typhoids';

//Pandemics
import AvianInfluenzas from './diseases/Pandemic/AvianInfluenzas';
import Coronas from './diseases/Pandemic/Coronas';
import Login from './pages/Login';

//Data Sources
import DSSPunjab from './datasources/DSSPunjab';
import ADRSPunjab from './datasources/ADRSPunjab';
import DHIS2Punjab from './datasources/DHIS2Punjab';
import IDSR from './datasources/IDSR';
import Analysis from './pages/Analysis';


const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
    <div className= 'flex relative dark:bg-main-dark-bg'>
    
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
          
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white '>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
        <div>
          {themeSettings && <ThemeSettings />}
          <Routes>
            {/* Dashboard  */}
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Home' element={<Home />} />

            {/* Pages  */}
            <Route path='/GeoTags' element={<GeoTags />} />
            <Route path='/DataSources' element={<DataSources />} />
            <Route path='/Definitions' element={<Definitions />} />
            <Route path='/Maps' element={<MapPage />} />
            <Route path='/Analysis' element={<Analysis/>}/>
            <Route path='/Pandemic' element={<Pandemic />} />
            <Route path='/Zoonotic' element={<Zoonotic />} />
            <Route path='/WaterBorne' element={<WaterBorne />} />
            <Route path='/VectorBorne' element={<VectorBorne />} />

            {/* Diseases */}
            <Route path='/Zoonotic/dogbites' element={<DogBites/>}/>
            <Route path='/Zoonotic/anthraxes' element={<Anthraxes/>}/>
            <Route path='/Zoonotic/brucelloses' element={<Brucelloses/>}/>
            <Route path='/Zoonotic/bovinetuberculoses' element={<BovineTuberculoses/>}/>
            <Route path='/Zoonotic/rabies' element={<Rabies/>}/>
            <Route path='/Zoonotic/salmonelloses' element={<Salmonelloses/>}/>
            <Route path='/vectorborne/cchfs' element={<CCHFs/>}/>
            <Route path='/vectorborne/chikungunyas' element={<Chikungunyas/>}/>
            <Route path='/vectorborne/dengues' element={<Dengues/>}/>
            <Route path='/vectorborne/leishmaniases' element={<Leishmaniases/>}/>
            <Route path='/vectorborne/malarias' element={<Malarias/>}/>
            <Route path='/vectorborne/zikas' element={<Zikas/>}/>
            <Route path='/waterborne/amebiases' element={<Amebiases/>}/>
            <Route path='/waterborne/choleras' element={<Choleras/>}/>
            <Route path='/waterborne/hepatitises' element={<Hepatitises/>}/>
            <Route path='/waterborne/typhoids' element={<Typhoids/>}/>
            <Route path='/pandemic/avianinfluenzas' element={<AvianInfluenzas/>}/>
            <Route path='/pandemic/coronas' element={<Coronas/>}/>            
            <Route path='/DSSPunjab' element={<DSSPunjab/>}/>         
            <Route path='/ADRSPunjab' element={<ADRSPunjab/>}/>                   
                        
            { /*DataSources */}
            <Route path='/DHIS2Punjab' element={<DHIS2Punjab/>}/>                   
            <Route path='/IDSR' element={<IDSR/>}/>                   

            
          </Routes>
        </div>
        </div>
        </div>
  </BrowserRouter>
  </div>
  )
}

export default App