import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const ManageContainer = styled.div`
display: flex;
flex-direction: column;
width: 17.2rem;
height: 21rem;
box-shadow: 5px 2px 8px 1px #D3D3D3;
border-radius: 1.25rem;
margin-top: 2rem;
`;
const ManageBtn = styled.div`
display: flex;
width: 100%;
height: 25%;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: #FFF;
color: #006CBF;
font-size: 1.7rem;
font-style: normal;
font-weight: 600;
margin: 0 auto;
&:hover {
    background: #006CBF;
    border-radius: 1.25rem;
    color: #FFF;
    transition: all 0.3s;
    cursor: pointer;
}
`;
const PublicBtn = styled.div`
display: flex;
width: 100%;
height: 25%;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: #FFF;
color: #006CBF;
font-size: 1.7rem;
font-style: normal;
font-weight: 600;
margin: 0 auto;
&:hover {
    background: #006CBF;
    border-radius: 1.25rem;
    color: #FFF;
    transition: all 0.3s;
    cursor: pointer;
}
`;
const EconomyBtn = styled.div`
display: flex;
width: 100%;
height: 25%;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: #FFF;
color: #006CBF;
font-size: 1.7rem;
font-style: normal;
font-weight: 600;
margin: 0 auto;
&:hover {
    background: #006CBF;
    border-radius: 1.25rem;
    color: #FFF;
    transition: all 0.3s;
    cursor: pointer;
}
`;
const FreeBtn = styled.div`
display: flex;
width: 100%;
height: 25%;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: #FFF;
color: #006CBF;
font-size: 1.7rem;
font-style: normal;
font-weight: 600;
margin: 0 auto;
&:hover {
    background: #006CBF;
    border-radius: 1.25rem;
    color: #FFF;
    transition: all 0.3s;
    cursor: pointer;
}
`;

function MajorManageClick() {
    return (
        <ManageContainer>
            <ManageBtn>글로벌경영학부</ManageBtn>
            <PublicBtn>공공인재학과</PublicBtn>
            <EconomyBtn>경제세무학과</EconomyBtn>
            <FreeBtn>융합자유전공학부</FreeBtn>
        </ManageContainer>
           
    );
}

export default MajorManageClick;