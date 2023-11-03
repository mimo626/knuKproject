import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 5.375rem;
    height: 2.125rem;
    padding: 0.5rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border: 2px solid #54A9EA;
    border-radius: 18.75rem;
`;
const SignupText = styled.div`
    color: #54A9EA; 
    text-align: center;
    font-family: Inter;
    font-size: 1rem;
    font-weight: 600;
    line-height: 100%;
`;
function SignupBtn() {

    return (
        <Container>
            <SignupText>Sign Up</SignupText>
        </Container>
    );
}

export default SignupBtn;