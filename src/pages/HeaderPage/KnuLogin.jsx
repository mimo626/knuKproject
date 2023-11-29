import Header from "../../components/Header";
import axios from "axios";
import React, { useState } from 'react';




    
    function Login() {
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

