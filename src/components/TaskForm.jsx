import React, { useEffect, useState } from "react";

const TaskForm = ({ onSubmit, editTask }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        status: 'To Do'
    });

    useEffect(() => {
        if (editTask) {
            setTask(editTask);
        }
    }, [editTask]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(task);
        setTask({
            title: '',
            description: '',
            status: 'To Do'
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>{editTask ? "Edit Task" : "Add Task"}</h3>
                <div>
                <input name="title" placeholder="Title" value={task.title} onChange={handleChange}/>
                </div>
                <div>
                <input name="description" placeholder="Description" value={task.description} onChange={handleChange}/>
                </div>
                <div>
                <select name="status" value={task.status} onChange={handleChange}>
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Done</option>
                </select>
                </div>
                <div>
                <button type="submit">{editTask ? "Edit Task" : "Add Task"}</button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;