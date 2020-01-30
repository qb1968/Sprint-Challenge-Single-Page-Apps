import React from "react";
import styled,  { keyframes } from 'styled-components';
import {rotateIn} from 'react-animations';
import {fadeIn } from 'react-animations';

let fadeAnimation = keyframes`${fadeIn}`;
let bounceAnimation = keyframes`${rotateIn}`;
const Card = styled.div`
 animation: 20s ${bounceAnimation};
 
 width: 30%;
  border-radius: 8px;
  border: solid black 1px;
  padding: 1rem;
  background-color: lightgray;
  margin: 3%;
  box-shadow: 10px 10px 8px #888888;

`;

const LocationCard = props => { 
  return (
    <div className ="grid-view">
      <Card>
        <h1>{props.name}</h1>
        <p>{props.type}</p>
        <p>{props.dimension}</p>
       
      </Card>
    </div>
  )
  
}
export default LocationCard;