import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function IT051() {
    const [current, setCurrent] = useState("0");
    const [queue, setQueue] = useState(null);
    const navigate = useNavigate();
    const fetchCurrent = async () => {
        const res = await axios.get("http://localhost:8080/api/queue/current");
        setCurrent(res.data.current);
    };

    const nextQueue = async () => {
        const res = await axios.post("http://localhost:8080/api/queue/next");
        setCurrent(res.data.current);
    };

    const handleClick = async () => {
        // const res = await axios.post('/api/queue/take');
        // setQueue(res.data.queue);
        // window.location.href = `/queue/confirm?queue=${res.data.queue}`;
        navigate('/IT-05-2');
    };

    const handleClickClear = async () => {
        // const res = await axios.post('/api/queue/take');
        // setQueue(res.data.queue);
        // window.location.href = `/queue/confirm?queue=${res.data.queue}`;
        navigate('/IT-05-3');
    };

    useEffect(() => {
        // fetchCurrent();
    }, []);

    return (
        <div>
            <h1>IT 05-1</h1>
            <button onClick={handleClick} style={{ fontSize: 32 }}>รับบัตรคิว</button>
            <button onClick={handleClickClear} style={{ fontSize: 32 }}>ล้างคิว</button>

        </div>
    );
}

export default IT051;