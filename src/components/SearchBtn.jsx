import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";
import axios, { AxiosError } from "axios";

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
    return (
        <Content>
            <SearchInput onClick={() => propsSearch.switch(false)} type="text" id="keyWord"></SearchInput>
            <SearchText><IoMdSearch onClick={() => {
                try {
                    axios.post('/keyword/add/rankingRecord', {
                        keyword: document.getElementById("keyWord").value
                    });
                } catch (error) {
                    alert(error)
                    console.error('에러가 발생했습니다:', error);
                }

                try {
                    axios.post('/keyword/add/recentRecord', {
                        keyword: document.getElementById("keyWord").value
                    });
                } catch (error) {
                    alert(error)
                    console.error('에러가 발생했습니다:', error);
                }
                location.reload();
            }}></IoMdSearch></SearchText>
        </Content>

    );
}

export default SearchBtn;