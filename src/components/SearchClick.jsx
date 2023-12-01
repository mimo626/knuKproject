import styled from "styled-components";
import axios, { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { json, Link, redirect, useParams } from "react-router-dom";

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

    const [recentKeyword, setRecentKeyword] = useState([]);
    var index = 0;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/keyword/request/recentRecord', {
                });
                setRecentKeyword(response.data);
            } catch (error) {
                console.error('에러가 발생했습니다:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <ContentWrapper>
            {recentKeyword.map(item => (
                <RecentSearch key={index++}>{item}</RecentSearch>
            ))}
        </ContentWrapper>
    );
}

export default SearchClick;