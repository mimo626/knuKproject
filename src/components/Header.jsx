import styled from "styled-components";
import knuLogo from './knuLogo.png';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #E9F9FA;
    color:006CBF;
    width:100%;
    height: 4.125rem;
    position: fixed;
    top: 0;
    flex-shrink: 0;
    overflow: hidden;
    border-bottom: 1px solid #006CBF;

`;

const Image = styled.img`
    width: 2.75rem;
    height: 2.75rem;
    align-items: center;
    margin-left:12.5rem;
    margin-top:0.51rem;
`;
const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0.78rem 6.5rem 0.78rem 3.65rem; 
    color: var(--knu, #006CBF);
    text-align: center;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 0.75rem */

`;
const HeaderWrapperList = styled.div`
    width: 12.125rem;s
    height: 2.5625rem;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
`;
const HeaderLine = styled.div`
    width: 76.875rem;
    stroke-width: 2px;
    stroke: var(--knu, #006CBF);    
    flex-shrink: 0;
`;

function Header() {
    return (
        <Container>
            <Image src={knuLogo} alt='강남대 로고'></Image>
            <HeaderWrapper>
                <HeaderWrapperList>소개</HeaderWrapperList>
                <HeaderWrapperList>공지사항</HeaderWrapperList>
                <HeaderWrapperList>프로그램</HeaderWrapperList>
                <HeaderWrapperList>교내 정보</HeaderWrapperList>
                <HeaderWrapperList>MY</HeaderWrapperList>
            </HeaderWrapper>
            <HeaderLine></HeaderLine>
        </Container>
    );
}

export default Header;