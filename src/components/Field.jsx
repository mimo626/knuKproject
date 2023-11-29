import styled from "styled-components";
import { Link } from "react-router-dom";

const FieldWrapper = styled.div`
    display: flex;
    width: 77.3rem;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2.75rem;
    flex-wrap: wrap;
    margin: 0 auto;


`;
const FieldUniv = styled.div`
display: flex;
width: 16rem;
height: 14rem;
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
const FieldJob = styled.div`
display: flex;
width: 16rem;
height: 14rem;
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

const FieldStudy = styled.div`
display: flex;
width: 16rem;
height: 14rem;
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
const FieldNotice = styled.div`
display: flex;
width: 16rem;
height: 14rem;
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


function Main() {
    return (
        <FieldWrapper>
            <Link to={'/field/major/ICT융합공학부/page/1'} style={{ textDecoration: "none"}}><FieldUniv >ICT융합공학부</FieldUniv></Link>
            <Link to={'/field/type/취창업/page/1'} style={{ textDecoration: "none"}}><FieldJob>취창업</FieldJob></Link>
            <Link to={'/field/type/학습%2F상담/page/1'} style={{ textDecoration: "none"}}><FieldStudy>학습/상담</FieldStudy></Link>
            <Link to={'/field/major/행사%2F안내/page/1'} style={{ textDecoration: "none"}}><FieldNotice>행사/안내</FieldNotice></Link>
        </FieldWrapper>
    );
}

export default Main;