import axios, { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { json, Link, redirect, useParams } from "react-router-dom";
import Parser from 'html-react-parser'; 
import Header from "../../components/Header";
import styled from "styled-components";
import { IoIosHeart } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { RiPencilFill } from "react-icons/ri";

const Page = styled.div`
    width:100%;
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    background: #E9F9FA;
    padding-top: 3rem;
`;
const MajorTitle = styled.div`
    font-family: Inter;
    font-size: 2.1875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%; 
    margin: 0 auto;
    padding-bottom: 2rem;

`;
const Line = styled.div`
    width: 75rem;
    height: 0.15rem;
    background-color: black;
    flex-shrink: 0;
    margin: 0 auto;
`;
const Content = styled.div`
    width:75rem;
    display: flex;
    flex-direction: column;
    margin:0 auto;
    background: #fff;
`;
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 8rem;
    background:#F2F2F2;
    padding: 2rem 2rem;
`;
const Title = styled.div`
    font-size: 1.4rem;
    font-weight: 500;
`;
const Line2 = styled.div`
    height: 0.1rem;
    background-color: #d3d3d3;
    flex-shrink: 0;
`;
const T= styled.table`
    font-size: 1.1rem;
    font-weight: 500;
    word-break:break-word;
    text-decoration: none;
    color:gray;
    text-align: right;
    padding: 0.2rem 0.2rem;
`;
const ProgramLCWrapper = styled.div`
    display: flex;
    flex-direction: row;   
    margin-top:1rem; 
`;

const ProgramLikeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    color: #FE4D82;
`;
const LikeCount = styled.div`
    font-size: 1rem;
    font-weight: 500;
    padding-top: 0.3rem;
    padding-right: 2rem;
`;
const Btn = styled.div`
display: flex;
width: 5rem;
height: 2rem;
padding: 0.1rem 0.5rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.5rem;
flex-shrink: 0;
border-radius: 0.5rem;
background: #fff;
color: #006CBF;
border: 1px solid #006CBF;
&: hover{
    background: #006CBF;
    color: #fff;
    
}
`;
function FieldRead() {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState();
    const { noticeId } = useParams();
    const [post, setPost] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseBody = await axios.post('/notice/requestbody', {
                    dbid: noticeId
                });
                setData(responseBody.data);
                setPost(responseBody.data.html.replaceAll('src="', 'style="width:45%" src="https://web.kangnam.ac.kr'))
            } catch (error) {
                console.error('에러가 발생했습니다:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Page>
            <Header/>
            <Line/>
            <Content>
                <TitleWrapper>
                    <Title>[대플] 컴퓨터활용능력 2급 자격증 취득 교육과정 모집</Title>
                    <T style={{ textAlign: 'right'}}>등록날짜: 2023.12.06 14:49</T>
                        <T style={{ textAlign: 'right'}}>작성자: 강민주</T>
                    <Line2/>
                    <ProgramLCWrapper>
                        <ProgramLikeWrapper>
                            <button style={{border:'none'}} onClick={async () => {
                                try {
                                    await axios.post('/like/click', {
                                        noticeId: data.dbid,
                                    });
                                    location.reload();
                                } catch (error) {
                                    alert(error.response.data)
                                    console.error('에러가 발생했습니다:', error);
                                }
                            }}>{data.checkLike ? <IoIosHeart style={{color:'#FE4D82'}} size={35}/> 
                            : <IoIosHeartEmpty  style={{color:'#FE4D82'}} size={35}/>}
                            </button>
                            <LikeCount>11</LikeCount>
                        </ProgramLikeWrapper>
                        <IoEye style={{ color: '#006CBF', paddingRight:3}} size={35}></IoEye>
                        <T style={{ paddingTop:3, color: '#006CBF'}}>222</T>        
                    </ProgramLCWrapper>
            </TitleWrapper>
                <div> 
            {Parser(post)}
                {data.comments && data.comments.map(item => (
                    <table key={item.id}>
                        <tbody>
                            <tr>
                                <td>{item.email}</td>
                                <td>{item.comment}</td>
                                {data.modify ? <td>{item.createdDate}</td>: <td>{item.modifiedDate}</td>}
                                <td><TiDelete style={{color:'#F87B7B'}} size={35} onClick={async () => {
                                    try {
                                        await axios.post('/comments/delete', {
                                            commentId: item.id
                                        });
                                        location.reload();
                                    } catch (error) {
                                        alert(error.response.data)
                                        console.error('에러가 발생했습니다:', error);
                                    }
                                }} >댓글 삭제</TiDelete></td>

                                <td><RiPencilFill style={{color:'#7BB4F8'}} size={30} onClick={async () => {
                                    try {
                                        await axios.post('/comments/modify', {
                                            commentId: item.id,
                                            comment: prompt("댓글 수정")
                                        });
                                        location.reload();
                                    } catch (error) {
                                        alert(error.response.data)
                                        console.error('에러가 발생했습니다:', error);
                                    }
                                }} >댓글 수정</RiPencilFill></td>
                            </tr>
                        </tbody>
                    </table>
                ))}
                <textarea placeholder="댓글을 입력하세요" id="comments" cols="50" rows="5"></textarea>
                    <Btn onClick={async () => {
                        try {
                            await axios.post('/comments/save', {
                                noticeId: data.dbid,
                                comment: document.getElementById("comments").value,
                                noticeTitle: data.title
                            });
                            location.reload();
                        } catch (error) {
                            alert(error.response.data)
                            console.error('에러가 발생했습니다:', error);
                            }
                        }} >댓글 작성</Btn>
                <br />
            </div>
            </Content>
            
        </Page>
        
    );
}
export default FieldRead; 