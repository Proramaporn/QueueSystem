const API_URL = 'http://localhost:8080/api';

export async function takeQueue() {
    const res = await fetch(`${API_URL}/queue/take`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    }
    );
    if (!res.ok) throw new Error("Failed to fetch queue");

    const data = await res.json();
    return data.queue;
}

export async function getCurrentQueue() {
    const res = await fetch(`${API_URL}/queue/current`, {
        credentials: 'include',
    });
    const data = await res.json();
    return data.current;
}

export async function resetQueue() {
    const res = await fetch(`${API_URL}/queue/reset`, {
        method: 'POST',
        credentials: 'include',
    });
    return res.json();
}
