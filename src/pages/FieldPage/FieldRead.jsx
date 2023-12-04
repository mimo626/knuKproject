import axios, { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { json, Link, redirect, useParams } from "react-router-dom";
import Parser from 'html-react-parser'; 

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
                setPost(responseBody.data.html)
            } catch (error) {
                console.error('에러가 발생했습니다:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div> 
           {Parser(JSON.stringify(post))}
            {data.comments && data.comments.map(item => (
                <table key={item.id}>
                    <tbody>
                        <tr>
                            <td>{item.email}</td>
                            <td>{item.comment}</td>
                            <td>{item.createdDate}</td>
                            <td>{item.modifiedDate}</td>
                            <td><button onClick={async () => {
                                try {
                                    await axios.post('/comments/delete', {
                                        commentId: item.id
                                    });
                                    location.reload();
                                } catch (error) {
                                    alert(error.response.data)
                                    console.error('에러가 발생했습니다:', error);
                                }
                            }} >댓글 삭제</button></td>

                            <td><button onClick={async () => {
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
                            }} >댓글 수정</button></td>
                        </tr>
                    </tbody>
                </table>
            ))}
            <textarea placeholder="댓글을 입력하세요" id="comments" cols="50" rows="5"></textarea>
            <button onClick={async () => {
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
            }} >댓글 작성</button>
            <br />
            <button onClick={async () => {
                try {
                    await axios.post('/like/click', {
                        noticeId: data.dbid,
                    });
                    location.reload();
                } catch (error) {
                    alert(error.response.data)
                    console.error('에러가 발생했습니다:', error);
                }
            }}>{data.checkLike ? "좋아요 취소" : "좋아요"}</button>
        </div>
    );
}
export default FieldRead; 