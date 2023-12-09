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
import { useNavigate } from "react-router-dom";

const TextArea = styled.textarea`
display: flex;
width: 45rem;
height: 5rem;
`;

function NoticeModify() {
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
        <div>
            <h3>수정 페이지 입니다.</h3>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.content}</p>
            <p>{data.createdDate}</p>
            <p>{data.modifiedDate}</p>
            <p>{data.writer}</p>

            <TextArea placeholder="수정할 게시물 제목을 입력하세요" id="title" ></TextArea>
            <TextArea placeholder="수정할 내용을 입력하세요" id="content" ></TextArea>

            <button onClick={async () => {
                    try {
                        await axios.put('/api/v1/posts/' + data.id, {
                            title: document.getElementById("title").value,
                            content: document.getElementById("content").value,
                            id: data.id
                        });
                        console.log("test")
                        navigate(-1);
                    } catch (error) {
                        alert(error.response.data)
                        console.error('에러가 발생했습니다:', error);
                    }
                }
            }>수정</button>

        </div>
    );
}
export default NoticeModify; 