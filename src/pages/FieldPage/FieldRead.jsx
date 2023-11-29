import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { json, Link, useParams } from "react-router-dom";

function FieldRead() {
    const [data, setData] = useState([]);
    const { noticeId } = useParams();
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.post('/notice/requestbody', {
            dbid: noticeId
          });
          setData(response.data);
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