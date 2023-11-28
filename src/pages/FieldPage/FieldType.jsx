import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { json, Link, useParams } from "react-router-dom";
import FieldRead from "./FieldRead";


function FieldType() {

    const [notice, setNotice] = useState([]);
    const { type } = useParams();

    useEffect(() => {
        const url = "http://localhost:8080/main/?page=1&perPage=20&type=" + type;

        // axios.get("http://localhost:3000/data/mock.json")
        axios.get(url)
            .then(res => {
                console.log(res.data.page);
                setNotice(res.data.page);
            })
            .catch(error => {
                console.log(error.response.data)
            })

    }, [])

    return (
        <div>
            {notice.data && notice.data.map(item => (
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
                            <td><Link to={'/field/read/' + item.dbid} style={{ textDecoration: "none" }}>{item.title}</Link></td>
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
export default FieldType; 