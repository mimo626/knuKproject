import styled from "styled-components";
import SearchBtn from "../components/SearchBtn";
import SearchClick from "../components/SearchClick";
import { useState } from "react";

const Page = styled.div`
    width: 100%;
    background:#fff;
    margin-top: 8rem;
    margin-bottom: 8rem;

`;
const SearchWrapper = styled.div`
    width:75.5rem;
    display: flex;
    flex-direction: column;
    margin:0 auto;
`;

const SearchLine = styled.div`
    width: 75rem;
    height: 0.3rem;
    background-color: #006CBF;
    flex-shrink: 0;
`;

function MainSearch() {
    const [search, setSearch] = useState(true)
    return (
        <Page>
            <SearchWrapper>
                    <SearchBtn switch={setSearch}></SearchBtn>
                    <SearchLine></SearchLine>
                    {
                    search 
                    ? <div></div>
                    : <SearchClick></SearchClick>
                    }
            </SearchWrapper>
        </Page>
    );
}

export default MainSearch;