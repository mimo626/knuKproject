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
height: 5.25rem;
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
height: 5.25rem;
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
height: 5.25rem;
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
height: 5.25rem;
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
//융합자유전공학부 데이터 없음
function MajorManageClick() {
    return (
        <ManageContainer>
            <Link to={'/field/major/글로벌경영학부/page/1'} style={{ textDecoration: "none"}}><ManageBtn>글로벌경영학부</ManageBtn></Link>
            <Link to={'/field/major/정경학부/page/1'} style={{ textDecoration: "none"}}><PublicBtn>공공인재학과</PublicBtn></Link>
            <Link to={'/field/major/정경학부/page/1'} style={{ textDecoration: "none"}}><EconomyBtn>경제세무학과</EconomyBtn></Link>
            <Link to={'/field/major/융합자유전공학부/page/1'} style={{ textDecoration: "none"}}><FreeBtn>융합자유전공학부</FreeBtn></Link>
        </ManageContainer>
           
    );
}

export default MajorManageClick;