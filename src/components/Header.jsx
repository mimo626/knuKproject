import styled from "styled-components";
import knuLogo from './knuLogo.png'


const Container = styled.div`
    background-color: #E9F9FA;
    color:006CBF;
    width:100%;
    height:66px;
    margin-left: 24px;
    margin-right: 24px;
    flex-shrink: 0;
    overflow: hidden;
`;

const Image = styled.img`
    width: 2.75rem;
    height: 2.75rem;
    align-items: center;
    padding: 11px 80px 11px 36px;
`;
const Nav = styled.div`
    display: flex;
    padding: 12px 40px;
    color: var(--knu, #006CBF);
    text-align: center;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 0.75rem */

`;

function Header() {
    return (
        <Container>
            <Image src={knuLogo} alt='강남대 로고'></Image>
            <div className="navList">
                <div>소개</div>
                <div>공지사항</div>
                <div>프로그램</div>
                <div>교내 정보</div>
                <div>My</div>
            </div>
        </Container>
    );
}

export default Header;