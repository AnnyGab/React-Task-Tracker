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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks = {tasks}/>
    </div>
  )
}

export default App;
