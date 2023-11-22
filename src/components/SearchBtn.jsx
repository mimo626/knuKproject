import styled from "styled-components";
import { useState } from "react";

const Content = styled.div`
    width:75rem;
    height:2rem;
    display: flex;
    flex-direction: row;
`;

const SearchInput = styled.div`
    width: 71.7rem;
    height:2rem;
`;

const SearchText = styled.div`
    width: 4.3rem;
    color: var(--knu, #006CBF);
    text-align: center;
    font-family: Inter;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 600;
    padding-bottom:0.81rem;
    float: right;
`;

function SearchBtn(propsSearch) {
    return (
        <Content>
            <SearchInput onClick={() => propsSearch.switch(false)}></SearchInput>
            <SearchText>Search</SearchText>
        </Content>
        
    );
}

export default SearchBtn;