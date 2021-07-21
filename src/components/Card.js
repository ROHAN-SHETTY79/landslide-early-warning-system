import React from "react";
import styled from "styled-components";

function Card(item) {
  let newItem = item.item;
  let date = String(newItem.created_at);
  let newDate = date.slice(11, 19);

  //   for slicing data of MPU6050
  let gX = 0;
  let gY = 0;
  let gZ = 0;
  let aX = 0;
  let aY = 0;
  let aYN = 0;
  console.log(newItem);
  let objectLength = Object.keys(newItem).length;
  if (objectLength > 0) {
    gX = newItem.field4.slice(0, 6);
    gY = newItem.field5.slice(0, 6);
    gZ = newItem.field6.slice(0, 6);
    aX = newItem.field7.slice(0, 6);
    aY = newItem.field8.slice(0, 6);
  }

  let aYInt = parseInt(aY);
  let tilt = 0;

  if (Math.sign(aYInt)) {
    tilt = 1;
  }

  return (
    <div>
      <StyledHeading>Insights</StyledHeading>
      <Styledcard>
        <StyledCardItem>
          <StyledData>{newItem.field1} &#8451;</StyledData>
          <StyledDataName>Temperature</StyledDataName>
          <StyledUpdate>last update: {newDate}</StyledUpdate>
        </StyledCardItem>
        <StyledCardItem>
          <StyledData>{newItem.field2} %</StyledData>
          <StyledDataName>Humidity</StyledDataName>
          <StyledUpdate>last update: {newDate}</StyledUpdate>
        </StyledCardItem>
        <StyledCardItem>
          <StyledData>{tilt}</StyledData>
          <StyledDataName>Tilt</StyledDataName>
          <StyledUpdate>last update: {newDate}</StyledUpdate>
        </StyledCardItem>
        <StyledCardItem>
          <StyledData>{gX}</StyledData>
          <StyledDataName>Gx</StyledDataName>
          <StyledUpdate>last update: {newDate}</StyledUpdate>
        </StyledCardItem>
        <StyledCardItem>
          <StyledData>{gY}</StyledData>
          <StyledDataName>Gy</StyledDataName>
          <StyledUpdate>last update: {newDate}</StyledUpdate>
        </StyledCardItem>
        <StyledCardItem>
          <StyledData>{gZ}</StyledData>
          <StyledDataName>Gz</StyledDataName>
          <StyledUpdate>last update: {newDate}</StyledUpdate>
        </StyledCardItem>
        <StyledCardItem>
          <StyledData>{aX}</StyledData>
          <StyledDataName>Ax</StyledDataName>
          <StyledUpdate>last update: {newDate}</StyledUpdate>
        </StyledCardItem>
        <StyledCardItem>
          <StyledData>{aY}</StyledData>
          <StyledDataName>Ay</StyledDataName>
          <StyledUpdate>last update: {newDate}</StyledUpdate>
        </StyledCardItem>
        <StyledCardItem>
          <StyledData>{gZ}</StyledData>
          <StyledDataName>Az</StyledDataName>
          <StyledUpdate>last update: {newDate}</StyledUpdate>
        </StyledCardItem>
      </Styledcard>
    </div>
  );
}

const StyledHeading = styled.h1`
  border-bottom: 2px solid black;
`;

const Styledcard = styled.div`
  border-bottom: 2px solid black;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  color: #dee2e6;
`;

const StyledCardItem = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  /* display: block; */
  position: relative;
  text-align: center;
  min-width: 252px;
  min-height: 130px;
  border: 1.6px solid #000;
  margin: 1rem 0.5rem;
  border-radius: 3px;
  background-color: #f2f8f9;
  background-color: #6c757c;
  z-index: 0;
  cursor: pointer;
  :hover {
    background-color: #dee2e6;
    color: #000;
    transition: 0.8s;
  }
`;

const StyledUpdate = styled.h3`
  align-items: center;
  position: relative;
  top: 38px;
`;

const StyledDataName = styled.h3`
  align-items: center;
  position: relative;
  top: 33px;
`;

const StyledData = styled.h1`
  /* position: absolute;
    top: 22px; */
  font-weight: lighter;
  align-items: center;
  position: relative;
  top: 18px;
`;

export default Card;
