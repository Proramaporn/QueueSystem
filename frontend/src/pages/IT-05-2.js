import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './style.css';

function IT052() {
    const navigate = useNavigate();
    const myQueue = JSON.parse(localStorage.getItem('myQueue'));

    // const [params] = useSearchParams();
    // const queue = params.get('queue');

    return (
        <div className="page">
            <div className="content center">
                <h3>หมายเลขคิว</h3>
                <h1>1</h1>
                <p>วันที่ : {new Date().toLocaleDateString()} เวลา : {new Date().toLocaleTimeString()}</p>
                <button className="small-button" onClick={navigate('/IT-05-1')}>กลับไปหน้ารับบัตรคิว</button>
            </div>
        </div>
    );
}

export default IT052;