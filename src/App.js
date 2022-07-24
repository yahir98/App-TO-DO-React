
import './App.css';
import { FormTaskCreator } from './components/formTaskCreator';
import { useState, useEffect } from 'react'
import { TaskTable } from './components/taskTable';
import { VisibilityControl } from './components/visibilityControl';
import { Container } from './components/container';


function App() {

  const [taskItems, settaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  function CreateNewTask(taskName) {

    const existTask = taskItems.find(task => task.name === taskName);

    if (!existTask)
      settaskItems([...taskItems, { name: taskName, done: false }])


    else alert("Task exist")


  }

  const ToogleTask = (task) => {

    settaskItems(
      taskItems.map(t => t.name === task.name ? { ...t, done: !t.done } : t)
    );
  }

  useEffect(() => {

    let data = localStorage.getItem('tasks');
    if (data)
      settaskItems(JSON.parse(data));
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems));
    console.log("cambio");

  }, [taskItems])

  const ClearTasks = (task) => {

    settaskItems(taskItems.filter(x => !x.done))
    setShowCompleted(false);
  }

  return (
    <main className="bg-dark vh-100 text-white">
     <Container>

        <FormTaskCreator CreateNewTask={CreateNewTask} />

        <TaskTable tasks={taskItems} toogleTask={ToogleTask} title="Task for complete" />
        <VisibilityControl isChecked={showCompleted} setShowCompleted={(checked) => setShowCompleted(checked)} ClearTasks={ClearTasks} />

        {
          showCompleted && (
            <TaskTable tasks={taskItems} toogleTask={ToogleTask} showCompleted={showCompleted} title="Task completed" />
          )
        }

      
</Container>

    </main>
  );
}

export default App;
