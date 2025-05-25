const API_URL = 'http://localhost:8080/api';

export async function takeQueue() {
    const res = await fetch(`${API_URL}/queue/take`, {
        credentials: 'include',
    });
    return res.json();
}

export async function getCurrentQueue() {
    const res = await fetch(`${API_URL}/queue/current`, {
        credentials: 'include',
    });
    return res.json();
}

export async function nextQueue() {
    const res = await fetch(`${API_URL}/queue/next`, {
        method: 'POST',
        credentials: 'include',
    });
    return res.json();
}

export async function resetQueue() {
    const res = await fetch(`${API_URL}/queue/reset`, {
        method: 'POST',
        credentials: 'include',
    });
    return res.json();
}
