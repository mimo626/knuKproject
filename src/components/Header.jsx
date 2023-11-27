import styled from "styled-components";
import KnuLogo from './knuLogo.png';
import LoginBtn from "../components/LoginBtn";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    width:100%;
    height: 6rem;
    position: fixed;
    top: 0;
    overflow: hidden;
`;
const Content = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
    padding: 0;
    margin: 0 auto;
    list-style-type: none;
`;
const Image = styled.img`
    width: 5rem;
    height: 5rem;
    margin-right: 8rem;
`;
const HeaderWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
    padding: 0;
    margin: 0 auto;
`;
const HeaderWrapperList = styled.li`
    display: flex;
    width: 10rem;
    height: 2.5625rem;
    justify-content: center;
    align-items: center;
    color: black;
    text-align: center;
    font-family: Inter;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    margin: 0 auto;
    line-height: 100%; /* 0.75rem */
    &:link{
        color: #fff;
    }
    &:hover {
        font-size: 1.4rem;
        transition: all 0.3s;
        cursor: pointer;
    }
`;

const SideWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;    
    padding: 0;
    margin: 0 auto;
    margin-left: 8rem;
`;

const SideWrapperList = styled.li`
    display: flex;
    width: 6rem;
    height: 2.5625rem;
    justify-content: center;
    align-items: center;
    color: black;

    text-align: center;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    text-decoration: none;
    margin: 0 auto;
    line-height: 100%; /* 0.75rem */
    &:link{
        color: #fff;
    }
    &:hover {
        font-size: 1.2rem;
        transition: all 0.3s;
        cursor: pointer;
    }
`;

function Header() {
    return (
        <>
        <Container>
            <Content>
                <Image src={KnuLogo} alt='강남대 로고'></Image>
                <HeaderWrapper>
                    <Link to={'/intro'} style={{ textDecoration: "none"}}><HeaderWrapperList>소개</HeaderWrapperList></Link>
                    <Link to={'/notice'} style={{ textDecoration: "none"}}><HeaderWrapperList>공지사항</HeaderWrapperList></Link>
                    <HeaderWrapperList><a>프로그램</a></HeaderWrapperList>
                    <HeaderWrapperList><a>교내 정보</a></HeaderWrapperList>
                </HeaderWrapper>
                <SideWrapper>
                    <Link to={'/my'} style={{ textDecoration: "none"}}><SideWrapperList>My</SideWrapperList></Link>
                    <Link to={'/login'} style={{ textDecoration: "none"}}><SideWrapperList><LoginBtn></LoginBtn></SideWrapperList></Link>
                </SideWrapper>
            </Content>
        </Container>
        
        </>

    );
}

export default Header;