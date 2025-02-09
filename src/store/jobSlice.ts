import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type JobId = {
    id: number;
};

type JobState = {
    data: number[];
};

const initialState: JobState = {
    data: [],
};

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setJob: (state, action: PayloadAction<JobId>) => {
            console.log("action: ", action);
            state.data.push(action.payload.id);
        },
    },
});

export const { setJob } = jobSlice.actions;

export default jobSlice.reducer;