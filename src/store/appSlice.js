import { createSlice } from "@reduxjs/toolkit"

const appSlice=createSlice({
    name:'appSlice',
    initialState:{
        toggleStatus:true,
    },
    reducers:{
        changeToggle:(state,action)=>{
            state.toggleStatus=!state.toggleStatus;
        }
    }
})

export const {changeToggle} =appSlice.actions
export default appSlice.reducer