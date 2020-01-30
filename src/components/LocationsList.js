import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LocationCard from "./LocationCard"
import SearchForm from "./SearchForm";

export default function LocationList(props) {
  // TODO: Add useState to track data from useEffect
  const [locations, setLocations] = useState([]);
  const [dataIsFiltered, dataIsUpdated] = useState([]);

  const searching = alllocations => {
    dataIsUpdated(alllocations)
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/location/`)
    .then(response => {
      setLocations(response.data.results);
      dataIsUpdated(response.data.results);
    })
    .catch(error => {
      console.error(error);
    });


  }, []);

  return (
    <section className="location-list">
      <Link className='links' to ={'/'}>Home</Link>
      <SearchForm searching={searching} location={locations}/>

{dataIsFiltered.map(location => (
  <LocationCard
    key={location.id}
    name={location.name}
    type={location.type}
    dimension={location.dimension}
    
  />
     ))}
    </section>
  );
}
