import React from 'react';
import { useNavigate } from 'react-router-dom';
import { takeQueue } from '../api/queue';
import './style.css';

export default function IT051() {
    const navigate = useNavigate();

    const handleTakeQueue = async () => {
        const data = await takeQueue();
        localStorage.setItem('queueNumber', data);
        navigate('/IT-05-2');
    };

    const handleClearQueue = async () => {
        navigate('/IT-05-3');
    };

    return (
        <div className="page">
            <div className="content center">
                <button className="big-button" onClick={handleTakeQueue}>รับบัตรคิว</button>
                <button className="small-button" onClick={handleClearQueue}>ล้างคิว</button>
            </div>
        </div>
    );
}
