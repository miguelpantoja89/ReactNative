import uuid from "uuid/v1";

const getTodos = () => [
    newTask({ text:"Task1", done: false}),
    newTask({ text:"Task2", done: false}),
    newTask({ text:"Task3", done: true}),
    newTask({ text:"Task4", done: true})
];
const newTask = task =>({
      id: uuid(),
      text: task.text,
      createdAt: new Date(),
      done: task.done
})

const addTask = (list,task) => [...(list || []), newTask(task)];

const updateTask = (list,task) => {
    const updateIndex = list.findIndex( t => t.id==task.id );
    const newTaskList = [...list];
    newTaskList[updateIndex] = task;
    return newTaskList;
}
const deleteTask = (list,task) => list.filter(t => t.id !== task.id);
export {getTodos, addTask, updateTask, deleteTask};