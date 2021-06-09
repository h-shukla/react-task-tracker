import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 6th 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th 2:30pm',
            reminder: false,
        },
    ])

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        console.log(id);

        const newTask = { id, ...task}
        setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    // if the prop is not supplied can define default props
    return (
      <div className="App">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={ deleteTask } onToggle={ toggleReminder } /> : 'No tasks to show'}
      </div>
    );
}

export default App;
