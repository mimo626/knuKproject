import styled from "styled-components";
import knuLogo from './knuLogo.png';
import LoginBtn from "../components/LoginBtn";
import { Link } from "react-router-dom";

const Container = styled.div`
    background-color: #E9F9FA;
    width:100%;
    height: 4.125rem;
    position: fixed;
    top: 0;
    overflow: hidden;
    border-bottom: 1px solid #006CBF;

`;

const HeaderWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    padding: 0;
    gap: 1em;
    margin: 0 auto;
    flex-shrink: 2;
    margin-left: 6.5rem;
    margin-right: 6.5rem;
    list-style-type: none;
`;

const Image = styled.img`
    width: 2.75rem;
    height: 2.75rem;
    align-items: center;
    margin-top:0.2rem;
    margin-right: auto;
`;

const HeaderWrapperList = styled.li`
    display: flex;
    width: 13.69969rem;
    height: 2.5625rem;
    padding: 0.75rem 2.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    color: var(--knu, #006CBF);
    text-align: center;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    margin: 0 auto;
    text-decoration: none;
    line-height: 100%; /* 0.75rem */
    &:hover {
        font-size: 1rem;
        transition: all 0.3s;
        cursor: pointer;
    }
`;

const HeaderLine = styled.div`
    width: 76.875rem;
    stroke-width: 2px;
    stroke: var(--knu, #006CBF);    
    flex-shrink: 0;
`;

function Header() {
    return (
        <>
        <Container>
            <HeaderWrapper>
                <li><Image src={knuLogo} alt='강남대 로고'></Image></li>
                <HeaderWrapperList><a>소개</a></HeaderWrapperList>
                <HeaderWrapperList><Link to={'/notice'}>공지사항</Link></HeaderWrapperList>
                <HeaderWrapperList><a>프로그램</a></HeaderWrapperList>
                <HeaderWrapperList><a>교내 정보</a></HeaderWrapperList>
                <HeaderWrapperList><a>MY</a></HeaderWrapperList>
                <HeaderWrapperList><a><LoginBtn></LoginBtn></a></HeaderWrapperList>
            </HeaderWrapper>
            <HeaderLine></HeaderLine>
        </Container>
        
        </>

    );
}

export default Header;