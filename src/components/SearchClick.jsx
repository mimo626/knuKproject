import styled from "styled-components";
import { useState } from "react";

const ContentWrapper = styled.div`
    width:70rem;
    height: 15rem;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    border: 1px solid #DCF6FA;
    background: #FFF;
    box-shadow: 2px 2px 3px 1px #D3D3D3;
`;
const RecentSearch = styled.div`
    width: 50%; 
    border-right: 1px solid gray;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;

`;
const RankSearch = styled.div`
    width: 50%; 
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;

`;
function SearchClick() {
    return (
        <ContentWrapper>
            <RecentSearch>최근 검색어</RecentSearch>
            <RankSearch>실시간 검색어 랭킹</RankSearch>
        </ContentWrapper>
    );
}

export default SearchClick;