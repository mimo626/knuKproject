import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function MajorType() {
  const [majorData, setMajorData] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const url = `http://localhost:8080/main/?page=1&perPage=20&type=${type}`;

    axios
      .get(url)
      .then((res) => {
        console.log(res.data.page);
        setMajorData(res.data.page);
      })
      .catch((error) => {
        console.log(error.response.data);
      });

  }, [type]); // type이 변경될 때마다 데이터를 다시 불러오기 위해 type을 의존성 배열에 추가

  return (
    <div>
      {majorData.data && majorData.data.map((item) => (
        <table key={item.dbid}>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.boardId}</td>
              <td>
                <Link to={`/major/read/${item.dbid}`} style={{ textDecoration: "none" }}>
                  {item.title}
                </Link>
              </td>
              <td>{item.major}</td>
              <td>{item.type}</td>
              <td>{item.writer}</td>
              <td>{item.regdate}</td>
              <td>{item.view}</td>
              <td>{item.likeCount}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default MajorType;
