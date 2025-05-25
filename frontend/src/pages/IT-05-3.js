import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getCurrentQueue, resetQueue } from '../api/queue';
import './style.css';

function IT053() {
    const [current, setCurrent] = useState(null);
    const navigate = useNavigate();

    const fetchQueue = async () => {
        const data = await getCurrentQueue();
        setCurrent(data);
    };

    const handleReset = async () => {
        await resetQueue();
        fetchQueue();
        navigate('/IT-05-1');
    };

    useEffect(() => {
        fetchQueue();
    }, []);

    return (
        <div className="page">
            <div className="content center">
                <button className="small-button" onClick={handleReset}>ล้างคิว</button>
                <h3>หมายเลขคิวปัจจุบัน</h3>
                <h1>{current}</h1>
                <button className="small-button" onClick={() => { navigate('/IT-05-1') }}>กลับไปหน้ารับบัตรคิว</button>
            </div>
        </div>
    );
}

export default IT053;