import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 3rem;
  height: 2rem;
  padding: 0.2rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
  border: 0.1rem solid black;
  border-radius: 18.75rem;
`;

const LoginText = styled.div`
  color: black;
  text-align: center;
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  &:hover {
    font-size: 1.2rem;
    transition: all 0.3s;
    cursor: pointer;
  }
`;

function LoginBtn() {
    // OAuth2 로그인 URL을 직접 호출
    const handleLogin = () => {
        window.location.href = 'http://localhost:8080/oauth2/authorization/google';
    };

    return (
        <Container>
            {/* 클릭 시 OAuth2 로그인 URL을 호출 */}
            <div onClick={handleLogin}>
                <LoginText>Log in</LoginText>
            </div>
        </Container>
    );
}

export default LoginBtn;