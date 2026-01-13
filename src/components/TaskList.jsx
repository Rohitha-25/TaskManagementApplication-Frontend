import React, { useEffect, useState } from "react";
import { addTask, deleteTask, getTasks, updateTask } from "../services/TaskService";
import TaskForm from "./TaskForm";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [editTask, setEditTask] = useState(null);

    const loadTasks = () => {
        getTasks().then(res => setTasks(res.data));
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const handleEdit = (task) => {
        setEditTask(task);
    }

    const handleDelete = (id) => {
        deleteTask(id).then(loadTasks);
    };

    const handleSubmit = (task) => {
        if (editTask) {
            updateTask(editTask.id, task).then(() => {
                setEditTask(null);
                loadTasks();
            });
        } else {
            addTask(task).then(loadTasks);
        }
    };

    return (
        <div>
            <TaskForm onSubmit={handleSubmit} editTask={editTask}/>
            <h3>All Tasks</h3>
            <ul>
                {tasks.map(t => (
                    <li key={t.id}>
                        <strong>{t.title}</strong> - {t.description} - {t.status}
                        <button onClick={() => handleEdit(t)}>Edit</button>
                        <button onClick={() => handleDelete(t.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;