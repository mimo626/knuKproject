import styled from "styled-components";
import LoginBtn from "../components/LoginBtn";
import { Link } from "react-router-dom";
import SearchBtn from "../components/SearchBtn";
import SearchClick from "../components/SearchClick";
import knuLogo from '../components/knuLogo.png';
import { useState } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    width:100%;
    height: 8rem;
    position: fixed;
    top: 0;
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

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const imageStyle = {
    width: "5rem",
    height: "5rem",
    marginRight: "8rem"
};

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
        font-weight: 600;
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
const SearchWrapper = styled.div`
    width:12rem;
    display: flex;
    flex-direction: column;
    margin:0 auto;
`;

const SearchLine = styled.div`
    width: 11rem;
    height: 0.1rem;
    background-color: black;
    flex-shrink: 0;
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

const MenuWrapper = styled.div`
    display: block;
    margin: 0 auto;
`;

const StyledDiv = styled.div`
    display: ${props => props.display};
    z-index: 999;
    background-color: #fff;
    padding: 10px;
    & > li {
        padding: 0.2rem;
        list-style-type: none;
        text-align: center;
    }
`

function Header() {
    const [search, setSearch] = useState(true);
    const [display, setDisplay] = useState("none");

    return (
        <Container>
            <Content>
                <StyledLink to={'/main'}>
                    <img style={imageStyle} src={knuLogo} alt="강남대 로고" />
                </StyledLink>
                {/* 라우팅 충돌, 드롭다운 기능 */}
                <HeaderWrapper>
                    <MenuWrapper>
                    <Link to={'/intro'} style={{ textDecoration: "none"}}><HeaderWrapperList
                            onMouseOver={() => {
                                setDisplay("block");
                                console.log(display);
                            }}
                            onMouseOut={() => {
                                setDisplay("none");
                                console.log(display);
                            }}>소개</HeaderWrapperList></Link>
                        <StyledDiv display={"none"}>
                            <li>menu1</li>
                            <li>menu2</li>
                            <li>menu3</li>
                        </StyledDiv>
                    </MenuWrapper>
                    <Link to={'/notice'} style={{ textDecoration: "none"}}><HeaderWrapperList>공지사항</HeaderWrapperList></Link>
                    <HeaderWrapperList>프로그램</HeaderWrapperList>
                    <HeaderWrapperList>교내 정보</HeaderWrapperList>
                </HeaderWrapper>
                <SideWrapper>
                    <SearchWrapper>
                        {/* 최적화 가능한 로직 */}
                        <SearchBtn switch={setSearch}></SearchBtn>
                        <SearchLine></SearchLine>
                        {
                        search 
                        ? <div></div>
                        : <SearchClick></SearchClick>
                        }
                    </SearchWrapper>
                    <StyledLink to={'/my'}><SideWrapperList>My</SideWrapperList></StyledLink>
                    <SideWrapperList><LoginBtn /></SideWrapperList>
                </SideWrapper>
            </Content>
        </Container>
    );
}

export default Header;