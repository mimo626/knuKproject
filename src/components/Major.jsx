import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import MajorEngineerClick from "../components/MajorBtn/MajorEngineerClick";
import MajorEngineer from "../components/MajorBtn/MajorEngineer";
import MajorWelfareClick from "../components/MajorBtn/MajorWelfareClick";
import MajorWelfare from "../components/MajorBtn/MajorWelfare";
import MajorGlobalClick from "../components/MajorBtn/MajorGlobalClick";
import MajorGlobal from "../components/MajorBtn/MajorGlobal";
import MajorManage from "../components/MajorBtn/MajorManage";
import MajorManageClick from "../components/MajorBtn/MajorManageClick";
import MajorEdu from "../components/MajorBtn/MajorEdu";
import MajorEduClick from "../components/MajorBtn/MajorEduClick";

import axios from 'axios';

const Container = styled.div`
    display: flex;
    width: 97.3rem;
    flex-direction: column;
    margin: 0 auto;
`;

const MajorClickWrapper = styled.div`
    display: flex;
    width: 97.3rem;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2.75rem;
    flex-wrap: wrap;
    margin: 0 auto;
`;

const MajorWrapper = styled.div`
    display: flex;
    width: 97.3rem;
    align-items: flex-start;
    align-content: flex-start;
    gap: 2.75rem;
    flex-wrap: wrap;
    margin: 0 auto;
`;

const MajorBlank = styled.div`
display: flex;
width: 16rem;
height: 1rem;
padding: 1.875rem 0.625rem;
margin-top: 2rem;
justify-content: center;
align-items: center;
gap: 0.5rem;
flex-shrink: 0;
border-radius: 1.25rem;
`;
/*const Content = styled.h1`
height: 10rem;
`;*/



function Major() {
    const [engineer, setEngineer] = useState(true);
    const [welfare, setWelfare] = useState(true)
    const [global, setGlobal] = useState(true)
    const [manage, setManage] = useState(true)
    const [edu, setEdu] = useState(true)

    return (
        <Container>
            <MajorWrapper>
                <MajorEngineer switch={setEngineer}>공과대학</MajorEngineer>
                <MajorWelfare switch={setWelfare}>복지융합대학</MajorWelfare>
                <MajorGlobal switch={setGlobal}>글로벌인재대학</MajorGlobal>
                <MajorManage switch={setManage}>경영관리대학</MajorManage>
                <MajorEdu switch={setEdu}>사범대학</MajorEdu>
            </MajorWrapper>
            <MajorClickWrapper>
            {
                engineer
                ? <MajorBlank></MajorBlank>
                :<MajorEngineerClick></MajorEngineerClick>
            }
            {
                welfare
                ? <MajorBlank></MajorBlank>
                :<MajorWelfareClick></MajorWelfareClick>
            }
            {
                global
                ? <MajorBlank></MajorBlank>
                :<MajorGlobalClick></MajorGlobalClick>
            }
            {
                manage
                ? <MajorBlank></MajorBlank>
                :<MajorManageClick></MajorManageClick>
            }
             {
                edu
                ? <MajorBlank></MajorBlank>
                :<MajorEduClick></MajorEduClick>
            }
            </MajorClickWrapper>
            {/*<button onClick={()=>{
                fetch("http://180.226.157.77:8080/like/click", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        noticeId: 1
                    }),
                })
                .then((response) => console.log(response))
                .catch((err)=>{
                    console.log(err)
                });
            }}>kjhjg</button>
        <Content>content</Content>*/}
        </Container>
        
    );
}

export default Major;