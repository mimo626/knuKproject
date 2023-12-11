import axios, { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { json, Link, redirect, useParams } from "react-router-dom";
import Parser from 'html-react-parser';
import Header from "../../components/Header";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Page = styled.div`
    width:100%;
    margin-top: 8rem;

`;
const Content = styled.div`
    width:75.5rem;
    display: flex;
    flex-direction: column;
    margin:0 auto;
`;

const NoticeText = styled.div`
    width: 15rem;
    text-align: center;
    font-family: Inter;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
`;

const NoticeLine = styled.div`
    width: 75rem;
    height: 0.15rem;
    background-color: black;
    flex-shrink: 0;
    margin-top:2rem;
    margin-bottom:2rem;
`;

const NoticeTable = styled.table`
  width:100%;
  text-align: center;
  padding: 0;
  border-bottom: 1px solid black; 
  border-collapse: collapse

`;
const Tr = styled.tr`
border-bottom: 1px solid black; 
background: #FCFCFC;

`;
const Th = styled.th`
border-bottom: 1px solid black; 
padding: 1rem 0.5rem;
border-collapse: collapse
background: #F3F7FF;

`;
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
const Button = styled.button`
    width: 6rem;
    height: 3rem;
    padding: 0.5rem 0.5rem;
    background-color: #006CBF;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 2rem;
    margin-right: 2rem;
`;
function NoticeRead() {
    const [data, setData] = useState([]);
    const { noticeId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseBody = await axios.get('/api/v1/posts/' + noticeId, {
                });
                setData(responseBody.data);
            } catch (error) {
                console.error('에러가 발생했습니다:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Page>                
            <Header/>
            <Content>
                <NoticeText>공지사항</NoticeText>
                <NoticeLine/>
                <NoticeTable>
                    <tbody>
                        <Tr>
                        <Th style={{width:'5%'}}>{data.id}</Th>
                        <Th style={{width:'55%'}}>{data.title}</Th>
                        <Th style={{width:'20%'}}>{data.writer}</Th>
                        <Th style={{width:'20%'}}>{data.createdDate}</Th>
                        </Tr>
                    </tbody>
                    <p>{data.content}</p>
                </NoticeTable>
                <ButtonWrapper>
                    <Button onClick={() => {
                        navigate('/notice/modify/' + data.id)
                    }}>수정</Button>
                            <Button onClick={async () => {
                                try {
                                    await axios.delete('/api/v1/posts/' + data.id, {
                                    });
                                    navigate(-1);
                                } catch (error) {
                                    alert(error.response.data)
                                    console.error('에러가 발생했습니다:', error);
                                }
                            }
                            }>삭제</Button>
                </ButtonWrapper>
            </Content>
        </Page>
    );
}
export default NoticeRead; 