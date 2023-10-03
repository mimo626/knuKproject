import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
    display: flex;
`;

const Content = styled.div`
    width: 100%;
    justify-content: center;
`;

function NotFound() {
    const divStyle = {
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
    }

    return (
        <Container>
            <Header />
            <Content>
                <div style={divStyle}>
                    <img src="img/ramb_2.png" />
                    <p>
                        <strong>
                            원하시는 페이지를 찾을 수 없습니다.
                        </strong>
                    </p>
                </div>
            </Content>
        </Container>
    )
}

export default NotFound;