import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

const Content = styled.div`
    width:12rem;
    height:2rem;
    display: flex;
    flex-direction: row;
`;

const SearchInput = styled.div`
    width: 8rem;
    height:2rem;
`;

const SearchText = styled.div`
    width: 4rem;
    text-align: center;
    font-family: Inter;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 600;
    padding-bottom:0.5rem;
    float: right;
`;

function SearchBtn(propsSearch) {
    return (
        <Content>
            <SearchInput onClick={() => propsSearch.switch(false)}></SearchInput>
            <SearchText><IoMdSearch></IoMdSearch></SearchText>
        </Content>
        
    );
}

export default SearchBtn;