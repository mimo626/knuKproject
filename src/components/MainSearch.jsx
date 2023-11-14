import styled from "styled-components";
import SearchBtn from "../components/SearchBtn";
import { useState } from "react";

const Page = styled.div`
    width: 100%;
    background-color: #FFF;
    margin-top: 12rem;

`;
const SearchWrapper = styled.div`
    width:75.5rem;
    display: flex;
    flex-direction: row;
    margin:0 auto;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 35rem;
    height: 22.4375rem;
    flex-shrink: 0;
    border-radius: 6.25rem;
    background: #CAEFF4;
    box-shadow: 5px 2px 8px 1px #D3D3D3;
`;

const SearchLine = styled.div`
    width: 22.2rem;
    height: 0.3rem;
    background-color: #006CBF;
    flex-shrink: 0;
    margin-top:4.4rem;
`;
const RecentSearch = styled.div`
    width: 22.2rem;
    height: 12.5625rem;
    flex-shrink: 0;
    border: 1px solid #DCF6FA;
    background: #FFF;
`;
const Content2 = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 35rem;
    height: 22.4375rem;
    flex-shrink: 0;
    border-radius: 6.25rem;
    background: #DBF5D2;
    box-shadow: 5px 2px 8px 1px #D3D3D3;
    margin-left:5.5rem;
`;
const RankTitle = styled.div`
    color: black;
    text-align: center;
    font-family: Inter;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 600;
    margin-top:3.8rem;
    margin-bottom:0.3rem;
`;
const RankLine = styled.div`
    width: 22.2rem;
    height: 0.3rem;
    background-color: black;
    flex-shrink: 0;
    margin: 0 auto;
    margin-top:0.5rem;
    margin-bottom:17rem;
`;

function MainSearch() {
    const [search, setSearch] = useState(true)
    return (
        <Page>
            <SearchWrapper>
                <Content>
                    <SearchBtn switch={setSearch}></SearchBtn>
                    <SearchLine></SearchLine>
                    {
                    search 
                    ? <div></div>
                    : <RecentSearch>최근 검색어</RecentSearch> 
                    }
                </Content>
                <Content2>
                    <RankTitle>실시간 검색어 랭킹</RankTitle>
                    <RankLine></RankLine>
                </Content2>
            </SearchWrapper>
        </Page>
    );
}

export default MainSearch;