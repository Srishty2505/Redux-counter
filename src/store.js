import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./slice";

const store = configureStore(
    {
        reducer: {
            counter: sliceReducer,
        },
    }
)
export default store