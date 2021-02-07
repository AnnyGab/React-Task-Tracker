import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appoinment',
        day: 'Feb 5th at 2:30pm',
        remider: true,
    },
    {
        id: 2,
        text: 'School meeting',
        day: 'Feb 6th at 1:30pm',
        remider: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        remider: false,
    }
])

//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !==
   id))
}

  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks 
        tasks={tasks} 
        onDelete={deleteTask}/> : 'No Tasks To Show'}
    </div>
  )
}

export default App
