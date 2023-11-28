import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { json, Link, useParams } from "react-router-dom";

function FieldRead() {

    const [notice, setNotice] = useState([]);
    const { noticeId } = useParams();

    useEffect(() => {
        const url = "http://localhost:8080/main/read/" + noticeId;
        console.log(url);
        // axios.get("http://localhost:3000/data/mock.json")
        axios.get(url)
            .then(res => {
                console.log(res.data.body);;
                setNotice(res.data.body);
            })
            .catch(error => {
                console.log(error.response.data)
            })

    }, [])

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
                        <td>{notice.boardId}</td>
                        <td>{notice.title}</td>
                        <td>{notice.major}</td>
                        <td>{notice.type}</td>
                        <td>{notice.writer}</td>
                        <td>{notice.regdate}</td>
                        <td>{notice.view}</td>
                        <td>{notice.likeCount}</td>
                        <td>{notice.body}</td>
                        <td>{notice.img}</td>
                    </tr>
                </tbody>
            </table>
            {notice.comments && notice.comments.map(item => (
                <table key={item.id}>
                    <thead>
                        <tr>
                            <td>email</td>
                            <td>comment</td>
                            <td>createdDate</td>
                            <td>modifiedDate</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{item.email}</td>
                            <td>{item.comment}</td>
                            <td>{item.createdDate}</td>
                            <td>{item.modifiedDate}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
}
export default FieldRead; 