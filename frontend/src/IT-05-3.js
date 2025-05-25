import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function IT053() {
    const [queue, setQueue] = useState(null);
    const navigate = useNavigate();
    const fetchCurrent = async () => {
        const res = await axios.get('/api/queue/current');
        setQueue(res.data.queue);
    };

    const handleNext = async () => {
        // const res = await axios.post('/api/queue/next');
        // setQueue(res.data.queue);
        navigate('/IT-05-3');
    };

    const handleClear = async () => {
        navigate('/IT-05-3');
    };

    useEffect(() => {
        // fetchCurrent();
    }, []);

    return (
        <div>
            <button onClick={handleClear}>ล้างคิว</button>
            <h2>หมายเลขคิวปัจจุบัน</h2>
            <div style={{ fontSize: 60 }}>{queue}</div>
            <button onClick={() => navigate('/IT-05-1')}>กลับไปหน้ารับบัตรคิว</button>
        </div>
    );
}

export default IT053;