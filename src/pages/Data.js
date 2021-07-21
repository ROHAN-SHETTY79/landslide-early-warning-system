import React, { useState } from "react";
import { CSVLink } from "react-csv";
// style
import styled from "styled-components";
// icon
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
// Animations
import { motion } from "framer-motion";
// our animation
import { pageAnimation } from "../Animation";

function Data({ dataSet }) {
  const [format, setFormat] = useState("csv");

  const headers = [
    { label: "Date", key: "created_at" },
    { label: "ID", key: "entry_id" },
    { label: "Temperature", key: "field1" },
    { label: "Humidity", key: "field2" },
    { label: "Tilt", key: "field3" },
    { label: "Gyrpscope X-axis", key: "field4" },
    { label: "Gyrpscope Y-axis", key: "field5" },
    { label: "Gyrpscope Z-axis", key: "field6" },
    { label: "Accelerometer X-axis", key: "field7" },
    { label: "Accelerometer Y-axix", key: "field8" },
  ];

  function handleClick(event) {
    setFormat(event.target.innerHTML);
  }

  const csvReport = {
    filename: "Data-Set." + format,
    headers: headers,
    data: dataSet,
  };

  return (
    <StyledDiv
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>Select the required data format</h2>
      <div>
        <h3 onClick={handleClick}>xls</h3>
        <h3 onClick={handleClick}>csv</h3>
        <h3 onClick={handleClick}>json</h3>
      </div>
      <CSVLink {...csvReport} className="csvDownload">
        <CloudDownloadIcon id="downloadButton"></CloudDownloadIcon>
      </CSVLink>
      <p>data set is in .{format} format</p>
    </StyledDiv>
  );
}
// for framer-motion
const StyledDiv = styled(motion.div)`
  padding: 10px;
  text-align: center;
  margin: 6% auto 0;
  @media (max-width: 500px) {
    margin: 10% auto;
  }
  h2 {
    padding-bottom: 10px;
    cursor: pointer;
  }
  h3 {
    font-size: 20px;
    padding: 2px;
    cursor: pointer;
    :hover {
      transition: 0.4s;
      color: #185adb;
    }
  }

  #downloadButton {
    margin-top: 9px;
    color: #185adb;
    font-size: 80px;
    ${"" /* padding: 8px 6px; */}
    border-bottom: 2px solid #185ADB;
    :hover {
      transition: 0.5s;
      color: #39a2db;
      border-bottom: 2px solid #a2dbfa;
    }
  }
`;

export default Data;
