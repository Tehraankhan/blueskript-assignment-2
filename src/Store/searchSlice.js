const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const searchSlice = createSlice({
    name: "search",
    initialState: {
        item: " "
    },
    reducers: {
        setsearch(state, action) {
            state.item = action.payload


        },


    }
})

export const { setsearch } = searchSlice.actions
export default searchSlice.reducer

