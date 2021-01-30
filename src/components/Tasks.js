const tasks = [
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
    
]


const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
