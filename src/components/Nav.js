import React from 'react'
import styled from "styled-components";
import {Link} from "react-router-dom";
import LandscapeRoundedIcon from '@material-ui/icons/LandscapeRounded';

function Nav() {
    return (
        <StyledNav>
            <h1>
                <Link to="/"><LandscapeRoundedIcon id="Logo"></LandscapeRoundedIcon></Link>
            </h1>
            <ul>
                <li>
                    <Link href="#" to="/"> Home </Link>
                </li>
                <li>
                    <Link href="#" to="/graph">Visuals </Link>
                </li>
                <li>
                    <Link href="#" to="/dataSet">Data </Link>
                </li>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    background-color:  #6C757C;
    align-items: center;
    padding: 1rem 1.5rem;
    cursor: pointer;
    @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
    
    a{
        color: #DEE2E6;
        text-decoration: none;
        :hover{
            color: #000;
            transition: 1s;
        }
    }
    ul{
        display: flex;
        list-style: none;
    }
   #Logo{
        font-size: 1.5rem;
        font-weight:lighter;
        align-items: center;
        padding: 0;
        font-size: 44px;
    }

    li{
        padding: 0.7rem;
        position:relative;
        font-weight: bold;

    }
`;

export default Nav
