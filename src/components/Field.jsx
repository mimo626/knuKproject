import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
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
    const [department, setDepartment] = useState();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('/user/request', {
          });
          setDepartment(response.data.department)
        } catch (error) {
          console.error('에러가 발생했습니다:', error);
        }
      };
      fetchData();
    }, []);

    return (
        <FieldWrapper>
            <Link to={'/field/major/'+ department +'/page/1'} style={{ textDecoration: "none"}}><FieldUniv >{department === undefined ? "학부/선택" : department}</FieldUniv></Link>
            <Link to={'/field/type/취창업/page/1'} style={{ textDecoration: "none"}}><FieldJob>취창업</FieldJob></Link>
            <Link to={'/field/type/학습%2F상담/page/1'} style={{ textDecoration: "none"}}><FieldStudy>학습/상담</FieldStudy></Link>
            <Link to={'/field/major/행사%2F안내/page/1'} style={{ textDecoration: "none"}}><FieldNotice>행사/안내</FieldNotice></Link>
        </FieldWrapper>
    );
}

export default Main;