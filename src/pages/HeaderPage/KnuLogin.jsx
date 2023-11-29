import Header from "../../components/Header";
import axios from "axios";
import React, { useState } from 'react';
import styled from "styled-components";

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
const TextWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.1875rem;
    margin: 0 auto;
    padding-top: 5rem;
`;
const LoginTitle = styled.div`
    color: black;
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
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 3.25rem;
    margin:0 auto;
    width: 80%;
`;
const EmailWrapper = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 3.25rem;
    margin:0 auto;
    
`;
const KnuEmail= styled.div`
    color: #AFAFAF;
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
`;
const EmailBtn = styled.div`
    display: flex;
    width: 7.5rem;
    height: 2.5rem;
    padding: 0.75rem 2.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
`;
const EmailText = styled.div`
    color: var(--knu, #006CBF);
    text-align: center;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%
`;
function Login(){
  const [email, setEmail] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = async () => {
    try {
      const response = await axios.post('http://localhost:8080/mail/send?mail='+email, {
        mail: email,
      });

      setMessage(response.data);
    } catch (error) {
      setMessage(`에러 발생: ${error.message}`); 
    }
  };

  const confirmNumber = async () => {
    try {
      const response = await axios.post('http://localhost:8080/mail/confirmNumber?enteredNumber='+enteredNumber, {
       enteredNumber: enteredNumber,
      });

      setMessage(response.data);
    } catch (error) {
      setMessage(`에러 발생: ${error.message}`);
    }
  };

  return (
    <div>
      <label>
        이메일:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button onClick={sendMail}>인증번호 발송</button>


      <label>
        인증번호:
        <input type="text" value={enteredNumber} onChange={(e) => setEnteredNumber(e.target.value)} />
      </label>
      <button onClick={confirmNumber}>인증번호 확인</button>

      <p>{message}</p>
    </div>
  );


    }
    

    
    
        
        
    export default Login;