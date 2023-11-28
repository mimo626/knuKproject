import styled from "styled-components";

const ContentWrapper = styled.div`
    width:11rem;
    height: 5rem;
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
    background: #FFF;
    border: 1px solid #D3D3D3;
    overflow: visible;
`;
const RecentSearch = styled.div`
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 600;

`;

function SearchClick() {
    return (
        <ContentWrapper>
            <RecentSearch>최근 검색어</RecentSearch>
        </ContentWrapper>
    );
}

export default SearchClick;