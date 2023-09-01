import React, { useState, useEffect } from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Toolbar,
  Search,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  Edit,
  Inject,
  ExcelExport,
} from '@syncfusion/ej2-react-grids';
import {
  Category,
  ChartComponent,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  DataLabel,
  ColumnSeries
} from '@syncfusion/ej2-react-charts';
import { Header, Button, Navbar, LineChart, DiseaseLineChart } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { FiSettings } from 'react-icons/fi';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SubHeading from '../components/SubHeading';
import {
  contextMenuItems,
  diseasesGrid,
  dataSourcesGrid,
  dataSourcesData,
  importantLinksData,
  options,
  optionsYear,
  monthList,
  MapLatLng,
  DSSPunjabGrid
} from '../data/dummy';

const DSSPunjab = () => {  
  const {
  setCurrentColor,
  setCurrentMode,
  currentMode,
  activeMenu,
  currentColor,
  themeSettings,
  setThemeSettings,
} = useStateContext();
const [openTab, setOpenTab] = useState(1);
const [selectedValue, setselectedValue] = useState(0);
const [diseaseName, setDiseaseName] = useState('Dengue');
const [selectedMonth, setselectedMonth] = useState(202200);
const [monthName, setMonthName] = useState('October');
const [selectedYear, setselectedYear] = useState(2022);
const [selectedDisease, setselectedDisease] = useState("aM3Na2jQTts");
const [error, setError] = useState(null);
const [tableData, setTableData] = useState({});
const [loading, setLoading] = useState(true);
// const [ApiMapData, setApiMapData] = useState({});
const [count, setCount] = useState(0);
const center = [31.1471, 75.3412];

useEffect(() => {
  // console.log(selectedMonth);
  const source = axios.CancelToken.source();
  const url = `http://localhost:5000/dsspunjab`;
  // const url = `https://api.pakonehealth.org/dsspunjab`;
  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        cancelToken: source.token
      });
      console.log(response.data.data);
      setTableData(0);
      setTableData(Object.values(response.data.data));          
      setLoading(false);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        setError(error);
        setLoading(false);
      }
    }
  };
  fetchData();

  return () => {
    source.cancel('Component unmounted');
  };
}, [selectedYear, selectedValue, selectedDisease, count]);

function merge()
{
  const thisArray = Object.values(tableData).map(item1 => {
    const matchingItem2 = MapLatLng.find(item2 => item2.label === item1[1]);
    if(matchingItem2)
    {
      return { ...item1, label: matchingItem2.label, lat: matchingItem2.lat, lng: matchingItem2.lng};
    }
    else
      return {...item1};
  });
  setTableData(thisArray);

}

const Tabs = ({ color }) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center border-1 rounded-md">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-teal-600"
                    : "text-teal-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Data Table
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center border-1 rounded-md">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-teal-600"
                    : "text-teal-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Charts
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center border-1 rounded-md">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-teal-600"
                    : "text-teal-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                  merge();
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Maps
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  {/*
                Tab 1
                */}
                  <GridComponent
                    id='dhis2punjabTable'
                    dataSource={tableData}
                    allowFiltering={true}
                    allowSorting={true}
                    // allowPaging={true}
                    defaultValue={"Loading Data"}
                    filterSettings={'Excel'}
                    allowExcelExport={true} 
                    // ref={g => grid = g}
                    width='auto'>
                    <ColumnsDirective>
                      {DSSPunjabGrid.map((item, index) => (
                        /* eslint-disable react/jsx-props-no-spreading */
                        <ColumnDirective key={index} {...item} />
                      ))}
                      <Inject
                        services={[
                          // Page,
                          Sort,
                          Toolbar,
                          Filter,
                          ContextMenu,
                          Search,
                          ExcelExport,
                          Toolbar,
                          Sort,
                        ]}
                      />
                    </ColumnsDirective>
                  </GridComponent>
                </div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  {/*
                  Tab 2
                  */}
                  <ChartComponent
                    title='Total Cases'
                    primaryXAxis={{ valueType: "Category"}}
                    primaryYAxis={{ title: "Cases" }} legendSettings={{ visible: true }}
                    tooltip={{ enable: true }}
                  >
                    <Inject services={[ColumnSeries, LineSeries, Category, Legend, DataLabel]} />
                    <SeriesCollectionDirective>
                      <SeriesDirective
                        type='Column'
                        dataSource={Object.values(tableData)}
                        xName='gender'
                        yName='visit_count'
                        name='Gender'
                        dataLabel={{ textStyle: { textAlignment: 'Center', angle: 45 } }}
                        marker={{ dataLabel: { visible: true }, visible: true}}>
                      </SeriesDirective>
                    </SeriesCollectionDirective>
                  </ChartComponent>
                  
                </div>

                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  {/*
                  Tab 3
                  */}                    
                  <button 
                    type="button"
                    style={{ currentColor }}
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(3);
                      merge();
                    }}
                    className={`m-1 focus-ring ring-gray-300 shadow hover:shadow-md focus:outline-none border-2 border-gray-500 rounded px-4 py-2 text-base w-auto`}
                    >
                      Refresh Map
                  </button>
                  <MapContainer
                  center={center}
                  zoom={7}
                  style={{width : '70vw', height:'70vh'}}
                  >
                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* {
                      Object.values(tableData).map((item) => {
                        if(item.lat){
                        const latlng = [item.lat, item.lng];
                          return(
                          <Marker position={latlng} key={item[1]}>
                            <Popup>
                              <p className='text-xs font-medium text-center'>{item[0]}</p>
                              <p className='text-xs font-medium text-center'>{item.label}</p>
                              <p className='text-xs font-medium text-center'>{item[2]}</p>
                            </Popup>
                          </Marker>)
                        }
                      })
                    } */}
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const handleSelect = (value) => {
  setselectedValue(value)
  setMonthName(monthList[value - 1]);
};

const handleDisease = (value) => {
  setselectedDisease(value)
};

const handleYear = (value) => {
  setselectedYear(value);
};

return (
  <div className='m-2 md:m-6 p-2 md:p-6 bg-white rounded-3xl'>
    <Header category='Data Source' title='DSS - Punjab' color={currentColor} />
    {/* <div className='mt-4 w-auto md:w-auto h-auto'>
      <p className='text-left w-auto md:w-auto h-auto'>Disease Reporting System (DRS) is an application developed by Punjab Information Technology Board in collaboration with Primary & Secondary Health care Department to capture patient consultations at RHCs and BHUs level.</p> 
   </div> */}
   <Tabs color="teal" />
  </div>
      )
};

export default DSSPunjab;
