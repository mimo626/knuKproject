import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { json, Link, useParams } from "react-router-dom";
import Header from "../../components/Header";
import styled from "styled-components";

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
function FieldMajor() {
  const [data, setData] = useState([]);
  const { major } = useParams();
  const { page } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('/notice/requestPage', {
          major: major,
          type: '',
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
    <Page>
      <Header />
      {data.length > 0 && <MajorTitle>{data[0].major}</MajorTitle>}
      <Line />
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
    </Page>    
  );
}

export default FieldMajor;