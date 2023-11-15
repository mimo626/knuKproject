import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 3rem;
    height: 2rem;
    padding: 0.2rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border: 0.1rem solid #fff;
    border-radius: 18.75rem;
`;
const LoginText = styled.div`
    color: #fff; 
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

    return (
        <Container>
            <LoginText><a>Log in</a></LoginText>
        </Container>
    );
}

export default LoginBtn;