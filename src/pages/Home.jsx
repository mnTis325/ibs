import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import leftLogo from '../images/leftLogo.png';
import rightLogo from '../images/rightLogo.png';
import { priorityOHDiseases, otherOHDiseases, dataSources, relatedData, importantLinksData } from '../data/dummy';
import Button from '../components/Button'

const Home = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    bgColor,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  return (
    <div className='mt-4'>
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

    <div className='flex flex-wrap lg:flex-nowrap justify-center shadow-md rounded-3xl bg-white dark:bg-secondary-dark-bg items-center p-2 ml-8 mr-8'>
      <img className='flex justify-center h-full ml-2 mt-4 w-1/5' src={leftLogo}/> 
      <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-auto w-3/5 lg:w-full p-4 pt-4 mb-2 bg-no-repeat bg-center'>
            <div className='flex justify-center items-center'>
              <p className='flex text-3xl text-center font-semibold dark:text-gray-400 w-auto'
                  style={{color: currentColor}}
                  >
                  One Health Disease Surveillance Dashboard</p>
            </div>
            {/* <div>
              <p className='flex justify-center items-center mt-1 ml-2 mr-2 text-base font-extralight text-center text-gray-500 dark:text-white'>Digital platform for consolidation of information on One Health Diseases for analysis / joint decision making.</p>
            </div> */}
      </div>
      <img className='flex justify-center h-full mr-2 mt-4 w-1/5' src={rightLogo}/>
    </div>

    {/* Overview Section */}
    {/* <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4 ml-8 mr-8 justify-between"> */}
    <div className="flex gap-4 mt-4 mb-4 ml-8 mr-8 justify-between">
        <div className='bg-white dark:bg-secondary-dark-bg text-gray-500 dark:text-white shadow-xl border-1 rounded-2xl h-auto w-2/5 p-4'>
          <p className='text-lg font-medium text-center pb-1 overflow-auto'
                  style={{color: currentColor}}
                  >
            Objective
          </p>
          <p className='text-xs font-medium text-center'>To provide an ICT enabled platform displaying information on One Health Priority diseases from multiple data sources to facilitate joint analysis and decision making.</p> 
          <p className='text-xs font-medium text-center'>(Public Health, Animal Health, Enviroment and Food)</p>
          {/* <p className='text-xl font-medium pt-2 text-center text-gray-500 overflow-auto'>
            Structure
          </p> */}
        </div>

        <div className=' bg-white dark:bg-secondary-dark-bg shadow-xl border-1 rounded-2xl w-3/5 h-full p-4'>
          <p className='text-lg font-medium pb-3 text-center'
                  style={{color: currentColor}}
          >Target Audience</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-1 text-xl font-medium text-start text-gray-500 dark:text-white overflow-auto'>
          <p className='text-xs font-medium text-start'>o High - Mid Level Managers</p>
          <p className='text-xs font-medium text-start'>o Animal Health Departments</p>
          <p className='text-xs font-medium text-start'>o District Managers</p>
          <p className='text-xs font-medium text-start'>o NIH, Punjab</p>
          <p className='text-xs font-medium text-start'>o Provincial Department of Health</p>
          <p className='text-xs font-medium text-start'>o OH Policy Makers & Planners</p>
          <p className='text-xs font-medium text-start'>o Ministry of Health Sciences</p>
          <p className='text-xs font-medium text-start'>o Provincial Livestock Department</p>
          <p className='text-xs font-medium text-start'>o OH Partners and Researchers</p>
        {/* <img className='flex align-middle justify-center rounded-xl h-5/6 w-auto bg-white dark:bg-secondary-dark-bg' src={flowChart}/> */}
          {/* <p className='overflow-auto'>
            Beneficiaries
          </p> */}</div>
        </div>

    </div>

    {/* //Data Sources Section */}
    <div className='bg-white dark:bg-secondary-dark-bg text-gray-500 dark:text-white shadow-xl rounded-2xl border-1 mt-1 mb-1 ml-8 mr-8 pt-2 pb-1 text-center items-start justify-center'>
          <p className='text-lg font-medium pt-2 text-center'
                  style={{color: currentColor}}
                  >Data Sources</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 mb-2 ml-4 mr-4 justify-start">
        {dataSources.map((item) => (
        <div key={item.DataSource} className='bg-white dark:bg-secondary-dark-bg pt-1 pb-2 pl-1 pr-1 rounded-2xl border-1 shadow-md flex justify-start items-start hover:drop-shadow-xl'>
          <Link to={item.to}>
          <div className='flex'>
            <button
              type='button'
              // style={{
              //   color: item.iconColor,
              //   backgroundColor: item.iconBg,
              // }}
              className='text-xs rounded-lg p-1 mr-2'
            >
              {item.icon}
            </button>
            <div className='justify-center items-start'>
              <p className='text-base text-slate-600 font-medium text-left'>{item.DataSource}</p>
              <p className='text-xs font-medium text-left'>{item.FullForm}</p>
              <p className='text-xs text-left'>{item.Hospitals}, {item.Districts}</p>
              {/* <p className='text-sm text-gray-400 text-left'>{item.Districts}</p> */}
              <p className='text-xs text-left'>{item.Diseases}</p>
            </div>
          </div>
          </Link>
        </div>
        ))}

        </div>
      </div>

    {/* <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8 mb-8 ml-36 mr-36">
          {relatedData.map((item) => (
              <Link to={item.to}>
              <div key={item.Name} class="bg-white rounded-lg shadow-md p-4 h-56 flex flex-col justify-center items-center">
                <button className='mb-8'>
                  {item.icon}
                </button>
                <p class="text-base text-gray-400 font-medium mt-2">{item.Name}</p>
                <p class="text-2xl text-gray-500 font-normal mt-1">{item.Count}</p>
                </div>
                </Link>
          ))}
    </div>  */}

    
    {/* //Disease Trend Section */}
    <div className='flex ml-8 mr-8 mt-2 mb-4'>
      <div className='rounded-3xl shadow-md bg-white dark:bg-secondary-dark-bg pb-10 pt-4 pr-4 pl-4 justify-center items-center w-full min-h-590 max-h-screen'>
            <p  className='text-lg font-medium pt-2 text-center'
                style={{color: currentColor}}
                  >Disease Trends - 2022</p>
        {/* <LineChart 
            id='line-charts' 
            width='250px' 
            height='200px' 
            data={lineChartData}/> */}
             <iframe title='priorityDiseases' className='container justify-between items-center gap-2 h-full w-full text-white dark:text-white' src="https://charts.mongodb.com/charts-onehealth-cvjms/embed/charts?id=63e532c6-b64e-44d0-8804-293d8648cf74&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
        </div>


    </div>

      <div className='flex gap-2 ml-8 mr-8 mt-2 mb-2'>
        <div className="bg-white dark:bg-secondary-dark-bg text-gray-500 dark:text-white rounded-2xl shadow-md pl-8 pr-8 pt-4 pb-4 w-1/3 h-auto">
          <p className='text-lg font-medium pt-2 pb-2 text-center'
                  style={{color: currentColor}}
                  >One Health Priority Diseases</p>
            {priorityOHDiseases.map((item) => (
              <div key={item.title} className='flex rounded-lg justify-between pt-1 pb-1 pl-1 mt-4 hover:drop-shadow-xl hover:bg-gray-200 hover:text-gray-600'>
                <Link to={item.to}>
                <div className='flex gap-2'>
                  <div>{item.icon}</div>
                  <div>
                    <p className='text-sm font-medium'>{item.title}</p>
                    <p className='text-xs'>{item.dataSources}</p>
                  </div>
                </div>
                </Link>
              </div>
            ))}
        </div>

        <div className='bg-white dark:bg-secondary-dark-bg text-gray-500 dark:text-white rounded-2xl shadow-md pl-8 pr-8 pt-4 pb-4 w-1/3 h-auto'>
          <p className='text-lg font-medium pt-2 pb-2 text-center'
                  style={{color: currentColor}}
                  >Other OH Diseases</p>
          {otherOHDiseases.map((item) => (
                  <div key={item.title} className='flex rounded-lg justify-between pt-1 pl-1 pb-1 mt-4 hover:drop-shadow-xl hover:bg-gray-200 hover:text-gray-600'>
                    <Link to={item.to}>
                    <div className='flex gap-2'>
                  <div>{item.icon}</div>
                      {/* <button
                        type='button'
                        style={{
                          color: item.iconColor,
                          backgroundColor: item.iconBg,
                        }}
                        className='text-xs rounded-lg p-4'
                      >
                        {item.icon}
                      </button> */}
                      <div>
                        <p className='text-sm font-medium'>{item.title}</p>
                        <p className='text-xs'>{item.dataSources}</p>
                      </div>
                    </div>
                    </Link>
                    {/* <p className={`text-${item.pcColor}`}>{item.amount}</p> */}
                  </div>
                ))}
        </div>
      

        <div className='bg-white dark:bg-secondary-dark-bg text-gray-500 dark:text-white rounded-2xl shadow-md pl-8 pr-8 pt-4 pb-4 w-1/3 h-auto'>
        <p className='text-lg font-medium pt-2 pb-2 text-center'
                  style={{color: currentColor}}>Useful Links</p>
          {importantLinksData.map((item) => (
                  <div key={item.FullForm} className='flex justify-between pt-1 pb-1 pl-1 mt-4 rounded-lg hover:drop-shadow-xl hover:text-gray-600 hover:bg-gray-200'>
                    <Link to={item.Link}>
                    <div className='flex gap-2 justify-start items-center'>
                    <div>
                        {item.icon}
                      </div>
                      <div>
                        <p className='text-sm font-medium'>{item.FullForm}</p>
                        {/* <p className='text-xs text-gray-400'>{item.dataSources}</p> */}
                      </div>
                    </div>
                    </Link>
                    {/* <p className={`text-${item.pcColor}`}>{item.amount}</p> */}
                  </div>
                ))}
        {/* <p className='mt-4 text-base text-start'>Guideline for using the dashboard can be found here</p> */}
        <div className='flex items-center justify-center mt-4 pt-2 pb-2'>
        <Button
          text={"Guideline for the dashboard"}/>
          </div>
        </div>
      </div>
    </div>

    )
}

export default Home