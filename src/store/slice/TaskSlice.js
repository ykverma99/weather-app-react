import { createSlice } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
    name:"task",
    initialState:{
        tasks:[]
    },
    reducers:{
        addTask:(state,action)=>{
            const newTaks = {
                id: Date.now(),
                done:false,
                name:action.payload.tasks
            }
            state.tasks.push(newTaks)
        },
        removeTask:(state,action)=>{
            state.tasks = state.tasks.filter(item=>item.id !== action.payload.id)
        },
        doneTask:(state,action)=>{
            const findTask = state.tasks.find(item=>item.id === action.payload.id)
            if(findTask){
                findTask.done = !findTask.done
            }
        }
    }
})

export const {addTask,removeTask,doneTask} = TaskSlice.actions

export default TaskSlice.reducer