import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { json, Link, useParams } from "react-router-dom";


function FieldType() {
  const [data, setData] = useState([]);
  const { type } = useParams();
  const { page } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/notice/requestPage', {
          major: '',
          type: type,
          keyword: '',
          page: page,
          perPage: 20,
        });

        setData(response.data.data);
      } catch (error) {
        console.error('에러가 발생했습니다:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* 데이터를 사용하여 테이블 및 페이지 버튼 렌더링 */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Major</th>
            <th>Type</th>
            <th>Writer</th>
            <th>Regdate</th>
            <th>View</th>
            <th>LikeCount</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.dbid}>
              <td>{item.dbid}</td>
              <td><Link to={'/field/read/' + item.dbid} style={{ textDecoration: "none" }}>{item.title}</Link></td>
              <td>{item.major}</td>
              <td>{item.type}</td>
              <td>{item.writer}</td>
              <td>{item.regdate}</td>
              <td>{item.view}</td>
              <td>{item.likeCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FieldType;