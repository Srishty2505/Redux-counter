import { createSlice } from "@reduxjs/toolkit";

  export const slice =createSlice(
    {
        name: "counter",
        initialState :{
            count: 0
        },
        reducers :{
            incrementCount : function(state, action) {
                state.count = state.count+1
            },
            decrementCount : function(state, action) {
                state.count = state.count-1
            },
        }
    }
)

export const {incrementCount , decrementCount} = slice.actions
const sliceReducer = slice.reducer;
export default sliceReducer 