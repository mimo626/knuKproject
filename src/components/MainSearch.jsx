import styled from "styled-components";
import axios, { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { json, Link, redirect, useParams } from "react-router-dom";


const Page = styled.div`
    width: 100%;
    height: 17rem;
    background:#fff;
    margin-top: 8rem;

`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 14rem;
    background: #EAF8F7;
    margin-top: 8rem;
    border-radius: 20rem;
    margin: 0 auto;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem; 
    text-align: center;
    padding-top: 3rem;

`;
const RankWrapper1 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding: 2rem;
`;
const RankNum = styled.div`
    padding: 0.5rem 1.5rem;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 600;
`;
const RankList1 = styled.div`
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    color: #383838;
`;

const RankWrapper2 = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding: 2rem;

`;
const RankList2 = styled.div`
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 500;
    padding: 0.5rem 1.5rem;
    color: #383838;

`;
function MainSearch() {

    const [keywordRanking, setKeywordRanking] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('/keyword/request/rankingRecord', {
                });
                setKeywordRanking(response.data);
            } catch (error) {
                console.error('에러가 발생했습니다:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Page>
            <Content>
                실시간 인기 검색어
                <RankWrapper1>
                    <RankNum>1</RankNum><RankList1>{keywordRanking[0] === undefined ? "" : keywordRanking[0].keyword}</RankList1>
                    <RankNum>2</RankNum><RankList1>{keywordRanking[1] === undefined ? "" : keywordRanking[1].keyword}</RankList1>
                    <RankNum>3</RankNum><RankList1>{keywordRanking[2] === undefined ? "" : keywordRanking[2].keyword}</RankList1>
                </RankWrapper1>
                <RankWrapper2>
                    <RankNum>4</RankNum><RankList2>{keywordRanking[3] === undefined ? "" : keywordRanking[3].keyword}</RankList2>
                    <RankNum>5</RankNum><RankList2>{keywordRanking[4] === undefined ? "" : keywordRanking[4].keyword}</RankList2>
                    <RankNum>6</RankNum><RankList2>{keywordRanking[5] === undefined ? "" : keywordRanking[5].keyword}</RankList2>
                </RankWrapper2>
            </Content>
        </Page>
    );
}

export default MainSearch;