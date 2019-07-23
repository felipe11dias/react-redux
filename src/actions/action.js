import { ADD_TASK } from "./actionsTypes";

export function add_task(task){
    console.log("entrou no add");
    console.log(task);
    return { type: ADD_TASK, task }
}