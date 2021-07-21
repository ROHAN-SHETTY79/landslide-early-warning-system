import React, { useState, useEffect }  from 'react'
// styled
import styled from "styled-components";


function Welcome() {
    const [dt, setDt] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        let secTimer = setInterval(() => {
            setDt(new Date().toLocaleTimeString())
        }, 1000)

        return () => clearInterval(secTimer);
    }, []);

    // getting today
    let today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
   
    let day = (today.getDate() < 10 ? ('0' + today.getDate()): today.getDate())  +'-' + (monthNames[today.getMonth()]) + '-' + today.getFullYear()+" ";

    // to get current time
    const cuurentTime = today.getHours(); 
    let Greeting = " ";
    // to set greeting
    if (cuurentTime < 12) {
        Greeting = "Good morning";
    } else if (cuurentTime < 18) {
        Greeting = "Good afternoon";
    } else if (cuurentTime < 24) {
        Greeting = "Good evening";
    }

    return (
        <StyledWelcome>
            <h1>{day}</h1>
            <StyledDay>
                <h1>{Greeting}</h1>
                <StyledTime>{dt}</StyledTime>
            </StyledDay>
        </StyledWelcome>
    )
}

//styled Components
const StyledWelcome = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 0.8rem 0;
`;

const StyledDay = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    align-items: baseline;
    padding-top: 0.6rem;
`;

const StyledTime = styled.h3`
    padding-left: 12px;
`;



export default Welcome;