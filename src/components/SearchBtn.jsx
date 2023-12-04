import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";
import axios, { AxiosError } from "axios";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

const Content = styled.div`
    width:12rem;
    height:2rem;
    display: flex;
    flex-direction: row;
`;

const SearchInput = styled.input`
    width: 8rem;
    height:2rem;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 0.1rem solid #AFAFAF;
    &:focus{
        outline: none;
    }
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
    const [value, setValue] = useState("");
    const navigate = useNavigate();

    return (
        <Content>
            
            <SearchInput onChange={() => {
                propsSearch.switch(false) 
                setValue(document.getElementById("keyWord").value)
                }} type="text" id="keyWord"></SearchInput>

            <SearchText>
            <IoMdSearch onClick={async () => {
                try {
                    await axios.post('/keyword/add/rankingRecord', {
                        keyword: value
                    });
                    
                } catch (error) {
                    alert(error)
                    console.error('에러가 발생했습니다:', error);
                }

                try {
                    await axios.post('/keyword/add/recentRecord', {
                        keyword: value
                    });
                    
                } catch (error) {
                    alert(error)
                    console.error('에러가 발생했습니다:', error);
                }
                navigate('/field/keyword/' + value + '/page/1/')
                location.reload();
            }}></IoMdSearch></SearchText>
        </Content>

    );
}

export default SearchBtn;