import styled from "styled-components";

const Container = styled.div`
    width: 180px;
    height: 100vh;
    color: white;
    position: sticky;
    top: 0;
    left: 0;
    background-color: #5F73BC;
`;

function Header() {
    return (
        <Container>
            Header
        </Container>
    );
}

export default Header;