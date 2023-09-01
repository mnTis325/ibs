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
} from '@syncfusion/ej2-react-grids';
import {
  Category,
  ChartComponent,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  DataLabel,
  ColumnSeries,
  Tooltip
} from '@syncfusion/ej2-react-charts';
import {
  contextMenuItems,
  diseasesGrid,
  dataSourcesGrid,
  dataSourcesData,
  importantLinksData,
  entriesGrid,
  dogBiteData,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
  lineCustomSeries,
  IDSRGrid,
  optionsIDSR
} from '../data/dummy';

import { Header, Button, Navbar, LineChart, DiseaseLineChart } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { FiSettings } from 'react-icons/fi';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { options, optionsYear } from '../data/dummy';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const center = [31, 72];
const IDSR = () => {
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
  const [selectedValue, setSelectedValue]=useState(10);
  const [selectedYear, setSelectedYear]=useState(2022);
  const [selectedDisease, setselectedDisease] = useState("aM3Na2jQTts");
  const [tableData, setTableData] = useState({});
  const primaryxAxis = { valueType : Category };
  const sendValue = {};
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const url = `http://192.168.84.2:5000/idsr/${selectedValue}/${selectedYear}`;
    // const url = `http://localhost:5000/idsr/${selectedValue}/${selectedYear}`;
    const url = `https://api.pakonehealth.org/idsr/${selectedValue}/${selectedYear}`;
    console.log(selectedValue);
    console.log(selectedYear);

    // console.log(process.env.SERVER_PORT);
    axios.get(url)
    .then(response => {
      // this.setState({dhis2punjab: response.data});
      setTableData(response.data)
      console.log(response.data.rows);
    })
    .catch((error) => {
        console.log(error);
        console.log("Not receiving data");
    })


    // const source = axios.CancelToken.source();
    // const url = `http://localhost:5000/idsr/${selectedValue}/${selectedYear}`;
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(url, {
    //       cancelToken: source.token
    //     });
    //     setTableData(response.data);
    //     console.log(response.data);
    //     setLoading(false);
    //   } catch (error) {
    //     if (axios.isCancel(error)) {
    //       console.log('Request canceled', error.message);
    //     } else {
    //       setError(error);
    //       setLoading(false);
    //     }
    //   }
    // };
    // fetchData();

    // return () => {
    //   source.cancel('Component unmounted');
    // };


  }, [selectedValue, selectedYear, selectedDisease]);

  const Tabs = ({ color }) => {
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
                        id='tableDataIDSR'
                        dataSource={tableData.rows}
                        allowFiltering={true}
                        allowPaging={true}
                        defaultValue={"Loading Data"}
                        // filterSettings={filterSettings}
                        
                        width='auto'>
                          <ColumnsDirective>
                            {IDSRGrid.map((item, index) => (
                            /* eslint-disable react/jsx-props-no-spreading */
                            <ColumnDirective key={index} {... item}/>
                          ))}
                          <Inject
                            services={[
                            Filter,
                            Page,
                            Search,
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
                        primaryXAxis={{valueType:"Category", title:"Districts"}}
                        primaryYAxis={{title:"Cases"}} legendSettings={{visible:true}}
                        tooltip={{enable:true}}
                        >
                          <Inject services={[ColumnSeries, LineSeries, Category, Legend, DataLabel]}/>
                          <SeriesCollectionDirective>
                            <SeriesDirective
                            type='Column'
                            dataSource={tableData.rows}
                            xName='0'
                            yName='1'
                            name='Total Count'
                            marker={{dataLabel:{visible:true}, visible:true}}>
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
                    zoom={10}
                    style={{width : '70vw', height:'70vh'}}
                    >
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      {/* {
                        MapLatLng.map((item) => {
                          const latlng = [item.lat, item.lng];
                            return(<Marker position={latlng}>

                            </Marker>)
                        })
                      } */}
                      
                      <Marker position={center}>
                        <Popup>
                          {/* Very nice */}
                        </Popup>
                      </Marker>
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
    setSelectedValue(value)
  };
    
  const handleDisease = (value) => {
    setselectedDisease(value)
    console.log(selectedDisease);
  };

  const handleYear = (value) => {
       setSelectedYear(value)
  };
  return (
    <div className='m-2 md:m-6 p-2 md:p-6 bg-white rounded-3xl'>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mr-4 justify-start">
    <Header category='Data Source' title='IDSR' color={currentColor} />
    {
    /* <div>
          <Link to ='/idsr/zoonotic'>
          <Button
          className='bg-white text-gray-500 hover:text-white'
          text='Zoonotic Diseases'
          bgHoverColor='gray-500'
          />
          </Link>
          <Link to ='/idsr/waterborne'>
          <Button
          className='bg-white text-gray-500 hover:text-white'
          text='Water Borne Diseases'
          bgHoverColor='gray-500'
          />
          </Link>
          <Link to ='/idsr/vectorborne'>
          <Button
          className='bg-white text-gray-500 hover:text-white'
          text='Vector Borne Diseases'
          bgHoverColor='gray-500'
          />
          </Link>
          <Link to ='/idsr/pandemic'>
          <Button
          className='bg-white text-gray-500 hover:text-white'
          text='Pandemic Diseases'
          bgHoverColor='gray-500'
          />
          </Link>
    </div> */
    }
  <div className='flex w-full justify-end items-end dark: dark:bg-secondary-dark-bg'>
  <select onChange={(e) => handleSelect(e.target.value)}>  
    <option value="">Select a Month</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>

  <select onChange={(e) => handleYear(e.target.value)}>  
    <option value="">Select an Year</option>
    {optionsYear.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
  
    {/* Select Disease */}
  <select onChange={(e) => handleDisease(e.target.value)}>
    <option value="">Select a Disease</option>
      {optionsIDSR.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
    

    {/* <GridComponent
        id='gridcomp'
        dataSource={tableData.rows}
        width='auto'
      >
      <ColumnsDirective>
        {IDSRGrid.map((item, index) => (
          /* eslint-disable react/jsx-props-no-spreading*/
          /*
          <ColumnDirective key={index} {...item} />
        ))}
      </ColumnsDirective>
      <Inject
        services={[
          Resize,
          ContextMenu,
          Page,
        ]}
      />
    </GridComponent> */}
    {/* <div>
      <p>{selectedValue}, {selectedYear}</p>
    </div> */}
    </div>
    <Tabs color="teal"/>
    </div>
    
    )
  }
export default IDSR
