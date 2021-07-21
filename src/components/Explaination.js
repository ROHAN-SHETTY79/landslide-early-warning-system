import React from "react";

import styled from "styled-components";

function Explaination() {
  return (
    <StyledDiv>
      <h2>Fields and Units:</h2>
      <ul>
        <li>
          <b>Temperature</b> is in degree celsius.{" "}
        </li>
        <li>
          <b>Humidity</b> is in percentage and its found out by the formula:
        </li>
        <p>
          <span>
            {" "}
            <b>
              Relative Humidity (percentage) = ( actual vapor pressure /
              saturated vapor pressure ) x100.
            </b>{" "}
          </span>
        </p>
        <li>
          <b>Tilt</b> refers to the inclination or orientation. If there's an
          inclination/movement the value will be <i>1</i> else <i>0</i>.{" "}
        </li>
        <li>
          <b>Gx:</b> Gyroscope's X-axis data in degree/seconds
        </li>
        <li>
          <b>Gy:</b> Gyroscope's Y-axis data in degree/seconds
        </li>
        <li>
          <b>Gz:</b> Gyroscope's Z-axis data in degree/seconds
        </li>
        <li>
          <b>Ax:</b> Accelerometer X-axis data in g
        </li>
        <li>
          <b>Ay:</b> Accelerometer Y-axis data in g
        </li>
        <li>
          <b>Az:</b> Accelerometer Z-axis data in g
        </li>
      </ul>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin: 10px 0;

  h2 {
    padding-bottom: 4px;
  }
  ul li {
    padding-bottom: 4px;
  }
  p {
    padding: 8px 0;
  }
`;
export default Explaination;
