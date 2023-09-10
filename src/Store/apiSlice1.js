const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

export const STATUS = Object.freeze({
    idle: 'idle',
    loading: 'loading',
    error: 'error'

})

const apiSlice1 = createSlice({

    name: "api1",

    initialState: {

        data: [" "],

        status: STATUS.idle,

    },
    reducers: {


    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchapi.pending, (state, action) => {
                state.status = STATUS.loading
                console.log(state.status)
            })
            .addCase(fetchapi.fulfilled, (state, action) => {

                state.data = action.payload

                state.status = STATUS.idle

            })
            .addCase(fetchapi.rejected, (state, action) => {
                console.log(state.status)
                state.status = STATUS.error

            })


    }
})

export default apiSlice1.reducer

//in these function desire api is fetch and store it into data variable 
export const fetchapi = createAsyncThunk('api/fetch', async ([item, orderby]) => {



    const res = await fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${item}&orderBy=${orderby}&ts=1&apikey=db92f9d545757b399f815dd2436d7c28&hash=75393e933f7bea155893819d0cda7fa9`)
    const data = await res.json();
    console.log(data)
    return data.data.results













})