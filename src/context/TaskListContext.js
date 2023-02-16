import React, {createContext, useState} from 'react'


export const TaskListContext = createContext()

const TaskListContextProvider = props => {
  const [tasks, setTasks] = useState([
        {title: 'Read a book', id:1},
        {title: 'Wash the car', id:2},
        {title: 'Do laundry', id:3},
        {title: 'Write some code', id:4},

    ]);

    return (<TaskListContext.Provider value={{tasks}}>
        {props.children}
    </TaskListContext.Provider>)
}

export default TaskListContextProvider;