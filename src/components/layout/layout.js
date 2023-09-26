import React from "react";
import Footer from "./footer";
import Header from "./header";
import Nav from "../nav";
import "./layout.css"

const Layout = () => {
    return (
        <div className="layout">
            <Header></Header>
            <Nav></Nav>
            <main className="main">
                <div className="category">
                    <div className="tab">
                        <div className="collegeTab">단과대별</div>
                        <div className="fieldTab">분야별</div>
                    </div>
                </div>
                <div className="hotpro">Hot Program</div>
                <div className="callender">October</div>
                <div className="detail">
                    <div className="tab2">
                        <div className="menuTab">학식 식단표</div>
                        <div className="busTab">달구지 시간표</div>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}

export default Layout;