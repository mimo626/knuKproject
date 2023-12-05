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
    margin-top: 8rem;
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
const Input = styled.input`
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
const MajorSelect = styled.select`
    display: flex;
    width: 37.7rem;
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
const MajorOption = styled.option`
    color: black;
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
  const [selectedMajor, setSelectedMajor] = useState('');


    const sendMail = async () => {
    try {
      
      const response = await axios.post('/mail/send?mail='+email, {
        mail: email,
      });
      alert("인증번호 발송 완료.");

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
      alert("인증 완료");

      setMessage(response.data);
    } catch (error) {
      setMessage(`에러 발생: ${error.message}`);
    }
  };

    const saveDepartment = async () => {
        try {
            const response = await axios.post('/user/saveDepartment', null, {
                params: { department: selectedMajor },
            });

            alert('학부 저장 완료.');
            setMessage(response.data);
            setTimeout(() => {
                window.location.href = '/main';
            }, 0);
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
                        <Input placeholder="ex) 202104126@kangnam.ac.kr" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <EmailBtn onClick={sendMail}>인증번호 발송</EmailBtn>
                    </EmailWrapper>
                </TextWrapper2>
                <TextWrapper2>
                    <KnuEmail>인증 번호</KnuEmail>
                    <EmailWrapper>
                        <Input  type="text" value={enteredNumber} onChange={(e) => setEnteredNumber(e.target.value)} />
                        <EmailBtn onClick={confirmNumber}>이메일 인증</EmailBtn>
                    </EmailWrapper>
                </TextWrapper2>
                <TextWrapper2>
                    <KnuEmail>본인의 학과</KnuEmail>
                    <EmailWrapper>
                        <MajorSelect onChange={(e) => setSelectedMajor(e.target.value)}>
                            <MajorOption selected>본인의 학부(주전공)을 선택해주세요.</MajorOption>
                            <MajorOption>ICT융합공학부</MajorOption>
                            <MajorOption>인공지능융합공학부</MajorOption>
                            <MajorOption>부동산건설학부</MajorOption>
                            <MajorOption>사회복지학부</MajorOption>
                            <MajorOption>스포츠복지전공</MajorOption>
                            <MajorOption>실버산업학과</MajorOption>
                            <MajorOption>글로벌학부</MajorOption>
                            <MajorOption>음악학과</MajorOption>
                            <MajorOption>기독교학과</MajorOption>
                            <MajorOption>한영문화콘텐츠학과</MajorOption>
                            <MajorOption>글로벌경영학부</MajorOption>
                            <MajorOption>공공인재학과</MajorOption>
                            <MajorOption>경제세무학과</MajorOption>
                            <MajorOption>융합자유전공학부</MajorOption>
                            <MajorOption>교육학과</MajorOption>
                            <MajorOption>유아교육과</MajorOption>
                            <MajorOption>특수교육과</MajorOption>
                        </MajorSelect>
                    </EmailWrapper>
                </TextWrapper2>
                <MainBtn onClick={saveDepartment}>
                    <Link to="/main" style={{ textDecoration: "none", color: "inherit" }}>
                        인증 완료
                    </Link>
                </MainBtn>
            </Content>
        </Page>
  );
} 
export default Login;