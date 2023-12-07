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


function NoticeRead() {
    const [data, setData] = useState([]);
    const { noticeId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseBody = await axios.get('/api/v1/posts/' + noticeId, {
                });
                console.log(responseBody.data);
                setData(responseBody.data);
            } catch (error) {
                console.error('에러가 발생했습니다:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.content}</p>
            <p>{data.createdDate}</p>
            <p>{data.modifiedDate}</p>
            <p>{data.writer}</p>
            <button onClick={() => {
                //navigate('/notice/modify')
            }}>수정</button>

            <button onClick={async () => {
                try {
                    await axios.delete('/api/v1/posts/' + data.id, {
                    });
                    navigate(-1);
                } catch (error) {
                    alert(error.response.data)
                    console.error('에러가 발생했습니다:', error);
                }
            }

            }>삭제</button>
        </div>
    );
}
export default NoticeRead; 