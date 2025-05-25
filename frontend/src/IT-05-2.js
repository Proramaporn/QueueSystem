import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function IT052() {
    const [queue, setQueue] = useState(null);
    const navigate = useNavigate();
    const takeQueue = async () => {
        const res = await axios.post("http://localhost:8080/api/queue/take");
        setQueue(res.data.queue);
    };

    // const [params] = useSearchParams();
    // const queue = params.get('queue');

    return (
        <div>
            <h1>IT 05-2</h1>
            <h2>หมายเลขคิว</h2>
            <div style={{ fontSize: 60 }}>{queue}</div>
            <p>{new Date().toLocaleString()}</p>
            <button onClick={() => navigate('/IT-05-1')}>กลับไปหน้ารับบัตรคิว</button>
        </div >
    );
}

export default IT052;