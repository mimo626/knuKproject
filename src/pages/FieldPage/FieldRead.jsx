import axios, { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { json, Link, redirect, useParams } from "react-router-dom";

function FieldRead() {
    const [data, setData] = useState([]);
    const [userId, setUserId] = useState();
    const { noticeId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseBody = await axios.post('/notice/requestbody', {
                    dbid: noticeId
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
            <table>
                <thead>
                    <tr>
                        <td>boardId</td>
                        <td>title</td>
                        <td>major</td>
                        <td>type</td>
                        <td>writer</td>
                        <td>regdate</td>
                        <td>view</td>
                        <td>likeCount</td>
                        <td>body</td>
                        <td>img</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{data.boardId}</td>
                        <td>{data.title}</td>
                        <td>{data.major}</td>
                        <td>{data.type}</td>
                        <td>{data.writer}</td>
                        <td>{data.regdate}</td>
                        <td>{data.view}</td>
                        <td>{data.likeCount}</td>
                        <td>{data.body}</td>
                        <td>{data.img}</td>
                    </tr>
                </tbody>
            </table>
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