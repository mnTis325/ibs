import React, { useMemo } from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, Marker } from "react-google-maps";
import withScriptjs from 'react-google-maps/lib/withScriptjs';
import withGoogleMap from 'react-google-maps/lib/withGoogleMap';
import mapStyles from './mapStyles';
import mapStylesSilver from './mapStylesSilver';
import { Header } from '.';

//var LatLngLiteral = google.maps.LatLngLiteral; 

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight:2,
  clickable:false,
  draggable:false,
  editable:false,
  visible:true,
}; 
const criticalOptions = {
  ...defaultOptions,
  zIndex:2,
  fillOpacity:0.05,
  strokeColour:'#FF5252',
  fillColour:'#FF5252',
};
{/*
const diseaseData = {
  id:001,
  diseaseLat:33.5651,
  diseaseLng:73.0169
}
*/}

const data = [];
function Map(){
  return (
  <GoogleMap
  defaultZoom={10}
  defaultCenter={{lat: 33.5651,lng: 73.0169}}
  defaultOptions={{ styles: mapStylesSilver }}
  >
    {
      data.map((disease) => (
        <Marker 
        key={disease._id.$oid}
        position={{
          lat:disease.Latitude,
          lng:disease.Longitude
        }}
        />
      ))}
  </GoogleMap>
  )
}
const WrappedMap = withScriptjs(withGoogleMap(Map))
export default function Maps() {
    const center = useMemo(
    () => ({
      lat:33.5651, lng:73.0169
    }),
    []);

    const options = useMemo(
    () => ({
      disableDefaultUI:true,
      clickableIcons:true,
    }),
    []);

  return (
    <div style={{width:"100%", height:"100vh"}}>
    <div className='container m-2 md:m-6 p-2 md:p-6 bg-white rounded-3xl w-2/3 h-2/3'>
    <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
          process.env.REACT_APP_GOOGLE_KEY
        }`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      </div>
    </div>
  )
}