import axios from "axios";

const API_URL = 'http://localhost:8080';

const axiosInstance = axios.create({
    baseURL: API_URL,
    auth: {
        username: 'admin',
        password: 'admin123'
    }
});

export const getTasks = () => axiosInstance.get('/tasks');
export const addTask = (task) => axiosInstance.post('/tasks', task);
export const updateTask = (id, task) => axiosInstance.put(`/tasks/${id}`, task);
export const deleteTask = (id) => axiosInstance.delete(`/tasks/${id}`);