import knuLogo from "../../components/knuLogo.png";
import Header from "../../components/Header";
import axios from "axios";
import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.div`
    width:100%;
    margin-top: 8rem;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin:0 auto;
    margin-top: 7rem;
    width: 47.25rem;
    height: 46.875rem;
    flex-shrink: 0;
    border-radius: 3.125rem;
    background: #E8F9FA;
    box-shadow: 4px 4px 4px 0px rgba(79, 79, 79, 0.25);
`;
const TitleWrapper = styled.div`
    display: inline-flex;
    flex-direction: row;
    gap: 3rem;
    margin-left: 4.5rem;
    padding-top: 1rem;
`;
const KnuLogo = styled.img`
    width: 15rem;
    height:15rem;
    opacity: 40%;
`;
const TextWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    gap: 1.1875rem;
    padding-top: 5rem;
    padding-bottom: 4.5rem;
`;
const LoginTitle = styled.div`
    color: #7D7D7D;
    font-family: Inter;
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; 
`;
const LoginComment = styled.div`
    color: #7D7D7D;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
`;
const TextWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
`;
const EmailWrapper = styled.div`
    display: inline-flex;
    flex-direction: row;
    gap: 2rem;
    margin-bottom: 3rem;

`;
const KnuEmail= styled.div`
    color: #7D7D7D;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
`;
const EmailInput = styled.input`
    display: flex;
    width: 25rem;
    height: 2.5rem;
    flex-shrink: 0;
    background: #E8F9FA;
    color: #AFAFAF;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 0.1rem solid #AFAFAF;
    &:focus{
        outline: none;
    }
`;
const EmailBtn = styled.button`
    display: flex;
    width: 10.9rem;
    height: 2.85rem;
    padding: 0.75rem 2.5rem;
    gap: 0.625rem;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    border-radius: 6.25rem;
    border: 1px solid #006CBF;
    background: #E8F9FA;
    color: #006CBF;
    &:hover {
        font-weight: 600;
        transition: all 0.3s;
        cursor: pointer;
    }
`;
const MainBtn = styled.button`
    display: flex;
    width: 30rem;
    height: 2.85rem;
    padding: 0.75rem 2.5rem;
    gap: 0.625rem;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    border-radius: 6.25rem;
    background: #006CBF;
    color: #fff;
    border: none;
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 500;
    &:hover {
        font-weight: 700;
        transition: all 0.3s;
        cursor: pointer;
    }
`;
function Login(){
  const [email, setEmail] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = async () => {
    try {
      const response = await axios.post('/mail/send?mail='+email, {
        mail: email,
      });

      setMessage(response.data);
    } catch (error) {
      setMessage(`에러 발생: ${error.message}`); 
    }
  };

  const confirmNumber = async () => {
    try {
      const response = await axios.post('/mail/confirmNumber?enteredNumber='+enteredNumber, {
       enteredNumber: enteredNumber,
      });

      setMessage(response.data);
    } catch (error) {
      setMessage(`에러 발생: ${error.message}`);
    }
  };

  return (
    <Page>
            <Header></Header>
            <Content>
                <TitleWrapper>
                    <TextWrapper>
                        <LoginTitle>강남대학교 학생 인증</LoginTitle>
                        <LoginComment>인증을 통해 더 많은 기능을 이용해보세요!</LoginComment>
                    </TextWrapper>  
                    <KnuLogo src={knuLogo}></KnuLogo>
                </TitleWrapper>
                <TextWrapper2>
                    <KnuEmail>강남대 이메일</KnuEmail>
                    <EmailWrapper>
                        <EmailInput placeholder="ex) 202104126@kangnam.ac.kr" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <EmailBtn onClick={sendMail}>인증번호 발송</EmailBtn>
                    </EmailWrapper>
                </TextWrapper2>
                <TextWrapper2>
                    <KnuEmail>인증 번호</KnuEmail>
                    <EmailWrapper>
                        <EmailInput  type="email" value={enteredNumber} onChange={(e) => setEmail(e.target.value)} />
                        <EmailBtn onClick={confirmNumber}>이메일 인증</EmailBtn>
                    </EmailWrapper>
                </TextWrapper2>
                <TextWrapper2>
                    <KnuEmail>본인의 학과</KnuEmail>
                    <EmailWrapper>
                        <EmailInput  type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </EmailWrapper>
                </TextWrapper2>
                <Link to={'/main'} style={{ textDecoration: "none"}}><MainBtn>인증 완료</MainBtn></Link>
            </Content>
        </Page>
  );
} 
export default Login;