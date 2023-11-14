import styled from "styled-components";
import { useState } from "react";

const Content = styled.div`
    width:22.2rem;
    height:2rem;
    display: flex;
    flex-direction: row;
    margin:0 auto;
`;

const SearchInput = styled.div`
    margin-top:3.8rem;
    margin-bottom:0.3rem;
    width: 17.9rem;
    height:2rem;
`;

const SearchText = styled.div`
    margin-top:3.8rem;
    margin-bottom:0.3rem;
    width: 4.3rem;
    color: var(--knu, #006CBF);
    text-align: center;
    font-family: Inter;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 600;
    padding-bottom:0.81rem;
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