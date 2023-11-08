import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 4rem;
    height: 2rem;
    padding: 0.2rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border: 2px solid #006CBF;
    border-radius: 18.75rem;
    &:hover {
        font-size: 1rem;
        transition: all 0.3s;
        cursor: pointer;
    }
`;
const LoginText = styled.div`
    color: #006CBF; 
    text-align: center;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    &:hover {
        font-size: 1rem;
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