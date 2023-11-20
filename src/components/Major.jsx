import styled from "styled-components";
import { Link } from "react-router-dom";

const MajorWrapper = styled.div`
    display: flex;
    width: 97.3rem;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2.75rem;
    flex-wrap: wrap;
    margin: 0 auto;
`;
const MajorEngineer = styled.div`
display: flex;
width: 16rem;
height: 16rem;
padding: 1.875rem 0.625rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.5rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: #006CBF;
color: #fff;
font-size: 2rem;
font-style: normal;
font-weight: 700;
`;
const MajorWelfare = styled.div`
display: flex;
width: 16rem;
height: 16rem;
padding: 1.875rem 0.625rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.5rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: #006CBF;
color: #fff;
font-size: 2rem;
font-style: normal;
font-weight: 700;
`;
const MajorGlobal = styled.div`
display: flex;
width: 16rem;
height: 16rem;
padding: 1.875rem 0.625rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.5rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: #006CBF;
color: #fff;
font-size: 2rem;
font-style: normal;
font-weight: 700;
`;

const MajorManage = styled.div`
display: flex;
width: 16rem;
height: 16rem;
padding: 1.875rem 0.625rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.5rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: #006CBF;
color: #fff;
font-size: 2rem;
font-style: normal;
font-weight: 700;

`;
const MajorEdu = styled.div`
display: flex;
width: 16rem;
height: 16rem;
padding: 1.875rem 0.625rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.5rem;
flex-shrink: 0;
border-radius: 1.25rem;
background: #006CBF;
color: #fff;
font-size: 2rem;
font-style: normal;
font-weight: 700;
`;



function Major() {
    return (
        <MajorWrapper>
            <Link to={'/majorEngineer'} style={{ textDecoration: "none"}}><MajorEngineer >공과대학</MajorEngineer></Link>
            <Link to={'/majorWelfare'} style={{ textDecoration: "none"}}><MajorWelfare>복지융합대학</MajorWelfare></Link>
            <Link to={'/majorGlobal'} style={{ textDecoration: "none"}}><MajorGlobal>글로벌인재대학</MajorGlobal></Link>
            <Link to={'/majorManage'} style={{ textDecoration: "none"}}><MajorManage>경영관리대학</MajorManage></Link>
            <Link to={'/majorEdu'} style={{ textDecoration: "none"}}><MajorEdu>사범대학</MajorEdu></Link>
        </MajorWrapper>
    );
}

export default Major;