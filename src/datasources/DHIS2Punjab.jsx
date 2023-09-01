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
  table,
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
import {
  // contextMenuItems,
  // diseasesGrid,
  // dataSourcesGrid,
  // dataSourcesData,
  // importantLinksData,
  // entriesGrid,
  // dogBiteData,
  // LinePrimaryXAxis,
  // LinePrimaryYAxis,
  // lineCustomSeries,
  // IDSRGrid,
  options,
  optionsYear,
  DHIS2PunjabGrid,
  optionsDHIS2Punjab,
  monthList,
  MapLatLng
} from '../data/dummy';
import { Header, Button, Navbar, LineChart, DiseaseLineChart } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { FiSettings } from 'react-icons/fi';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SubHeading from '../components/SubHeading';

const center = [31.1471, 75.3412];
var count = [];
const DHIS2Punjab = () => {
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
  const [openTab, setOpenTab] = useState(1);
  const [compare, setCompare] = useState(1);
  const [selectedValue, setselectedValue] = useState(0);
  const [selectedCompareValue, setselectedCompareValue] = useState(0);
  const [selectedYear, setselectedYear] = useState(2022);
  const [selectedCompareYear, setselectedCompareYear] = useState(2022);
  const [selectedDisease, setselectedDisease] = useState("aM3Na2jQTts");
  const [diseaseName, setDiseaseName] = useState('Dengue');
  const [selectedMonth, setselectedMonth] = useState(202200);
  const [monthName, setMonthName] = useState('Please select a Month');
  const [year, setYear] = useState('Select an Year');
  const [compareMonthName, setCompareMonthName] = useState('Select a Month');
  const [compareYear, setCompareYear] = useState('Select an Year');
  const [error, setError] = useState(null);
  const [tableData, setTableData] = useState({});
  const [compareTableData, setCompareTableData] = useState({});
  const [loading, setLoading] = useState(true);
  // const [ApiMapData, setApiMapData] = useState({});
  const [totalCount, setTotalCount] = useState('0');
  const [search, setSearch] = useState('0');
  const [totalCompareCount, setTotalCompareCount] = useState('0');

  // const { isLoaded, loadError } = useLoadScript({});

  let grid;
  const toolbar = ['ExcelExport'];
  const toolbarClick = (args) => {
      if (grid && args.item.id === 'grid_excelexport') {
          grid.excelExport();
      }
  };

  useEffect(() => {
      const source = axios.CancelToken.source();
      const url = `http://localhost:5000/dhis2punjab/${selectedValue}/${selectedYear}/${selectedDisease}`;
      // const url = `https://api.pakonehealth.org/dhis2punjab/${selectedValue}/${selectedYear}/${selectedDisease}`;
      const fetchData = async () => {
        try {
          const response = await axios.get(url, {
            cancelToken: source.token
          });
          
          console.log(response.data.rows);
          setTableData(0);
          setTableData(Object.values(response.data.rows));          
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
      setTotalCount(getCount(tableData));
      return () => {
        source.cancel('Component unmounted');
      };
    }, [selectedYear, selectedValue, selectedDisease, totalCount]);
  // }, [totalCount]);

    useEffect(() => {
      const source = axios.CancelToken.source();
      // const url = `http://localhost:5000/dhis2punjab/${selectedValue}/${selectedYear}/${selectedDisease}`;
      const url = `https://api.pakonehealth.org/dhis2punjab/${selectedCompareValue}/${selectedCompareYear}/${selectedDisease}`;
      const fetchData = async () => {
        try {
          const response = await axios.get(url, {
            cancelToken: source.token
          });
          
          console.log(response.data.rows);
          setCompareTableData(0);
          setCompareTableData(Object.values(response.data.rows));          
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
      setTotalCompareCount(getCount(compareTableData));
      return () => {
        source.cancel('Component unmounted');
      };
    }, [selectedCompareValue, selectedCompareYear, selectedDisease]);

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
    console.log(thisArray);
  }

  // function countDisease(){
  //   var total =  Object.values(tableData).map(item => {
  //     let num = parseInt(item[2]);
  //     total = total + num;
  //     return total;
  //   });
  //   console.log(total)
  // }
function getCount(data) {
  count = [];
  count = Object.values(data).map(item => parseInt(item[2]));
  
  const sum = count.reduce(add, 0);
  function add(accumulator, a) {
    return accumulator + a;
  }
  return sum;
  // setTotalCount(sum);
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
                    setTotalCount(getCount(tableData));
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
                      // allowPaging={true}
                      defaultValue={"Loading Data"}
                      filterSettings={'Excel'}
                      toolbar={toolbar}
                      allowExcelExport={true} 
                      toolbarClick={toolbarClick}
                      ref={g => grid = g}
                      width='auto'>
                      <ColumnsDirective>
                        {DHIS2PunjabGrid.map((item, index) => (
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
                          ]}
                        />
                      </ColumnsDirective>
                    </GridComponent>
                    {
                      // console.log(tableData)
                    }
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
                          xName='1'
                          yName='2'
                          name='Districts'
                          dataLabel={{ textStyle: { textAlignment: 'Center', angle: 45 } }}
                          marker={{ dataLabel: { visible: true }, visible: true}}>
                        </SeriesDirective>
                      </SeriesCollectionDirective>
                    </ChartComponent>
                    <a
                  className={
                    "text-xs font-bold text-center uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-teal-600"
                      : "text-teal-600 bg-white")
                  }
                  onClick={e => {
                    e.preventDefault();
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Compare
                </a>
                      <div className='flex w-full pt-3 justify-end items-end gap-2 dark:dark:bg-secondary-dark-bg'>
                        {/* Select Month */}
                        <select className='bg-gray-100 rounded-lg px-2 dark:dark:bg-secondary-dark-bg'
                           onChange={(e) => {
                            handleCompareSelect(e.target.value)                  
                            setCompareMonthName(e.target.options[e.target.selectedIndex].text); 
                            }}>
                          <option value="">{compareMonthName}</option>
                          {options.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}

                        </select>

                        {/* Select Year */}
                        <select className='bg-gray-100 rounded-lg px-2 dark:dark:bg-secondary-dark-bg'
                          onChange={(e) => {
                            handleCompareYear(e.target.value)
                            setCompareYear(e.target.options[e.target.selectedIndex].text)
                          }}>
                          <option value="">{compareYear}</option>
                          {optionsYear.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                      </select>
                      </div>
                      <div className='flex w-full pt-3 justify-end items-end dark: dark:bg-secondary-dark-bg'>
                      <p className='flex px-4'>Total Count : {totalCompareCount}</p>
                      <button 
          type="button"
          style={{ currentColor }}
          onClick={e => {
            e.preventDefault();
            merge();
            setTotalCompareCount(getCount(compareTableData));
          }}
          className={`focus-ring ring-gray-300 shadow hover:shadow-md focus:outline-none border-2 border-gray-500 rounded px-2 text-base w-auto`}
          >
            Refresh
        </button>
                    </div>
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
                          dataSource={Object.values(compareTableData)}
                          xName='1'
                          yName='2'
                          name='Districts'
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
                    <MapContainer
                    center={center}
                    zoom={7}
                    style={{width : '70vw', height:'70vh'}}
                    >
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      {
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
                      }
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

  const handleDisease = (value) => {
    setselectedDisease(value)
  };

  const handleSelect = (value) => {
    setselectedValue(value)
    setMonthName(monthList[value - 1]);
  };

  const handleYear = (value) => {
    setselectedYear(value);
  };

  const handleCompareSelect = (value) => {
    setselectedCompareValue(value)
    setCompareMonthName(monthList[value - 1]);
  };

  const handleCompareYear = (value) => {
    setselectedCompareYear(value);
  };

  return (
    <div className='m-2 md:m-6 p-2 md:p-6 dark:text-white bg-white dark:bg-secondary-dark-bg rounded-3xl'>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mr-4 justify-start">
        <Header category='Data Source' title='DHIS 2 - Punjab' color={currentColor}/>

        {/* Selection */}
        <div className='flex w-full justify-end gap-2 items-end dark: dark:bg-secondary-dark-bg'>

        {/* Select Disease */}
        <select className='bg-gray-100 rounded-lg px-2 dark:dark:bg-secondary-dark-bg'
          onChange={(e) => {
          handleDisease(e.target.value)
          setDiseaseName(e.target.options[e.target.selectedIndex].text);
          }
          }>
          <option value="">Select a Disease</option>
          {optionsDHIS2Punjab.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <p className='px-4'>during</p>
        {/* Select Month */}
        <select className='bg-gray-100 rounded-lg px-2 dark:dark:bg-secondary-dark-bg'
                onChange={(e) => {
                  handleSelect(e.target.value)
                  setMonthName(e.target.options[e.target.selectedIndex].text);
                }}>
          <option value="">Select a Month</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}

        </select>
        {/* Select Year */}
        <select className='bg-gray-100 rounded-lg px-2 dark:dark:bg-secondary-dark-bg'
                onChange={(e) => {
                  handleYear(e.target.value)
                  setYear(e.target.options[e.target.selectedIndex].text)
                  }}>
          <option value="">Select an Year</option>
          {optionsYear.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>        
      </div>
      </div>
      
        {/* Total Count */}
      <div className='flex w-full px-4 pt-4 justify-end items-end dark: dark:bg-secondary-dark-bg'>
      <p className='flex px-4'>Total Count : {totalCount}</p>
      <button 
          type="button"
          style={{ currentColor }}
          onClick={e => {
            e.preventDefault();
            merge();
            setTotalCount(getCount(tableData));
            setSearch(search + 1);
          }}
          className={`focus-ring ring-gray-300 shadow hover:shadow-md focus:outline-none border-2 border-gray-500 rounded px-2 text-base w-auto`}
          >
            Refresh
        </button>
      </div>
      <Tabs color="teal" />
    </div>

  )
}
export default DHIS2Punjab
