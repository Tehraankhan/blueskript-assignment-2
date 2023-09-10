import { configureStore } from "@reduxjs/toolkit";

import apiSlice1 from "./apiSlice1";
import searchSlice from "./searchSlice";
import apiSlice2 from "./apiSlice2";

const Store = configureStore({

    reducer: {
        api: apiSlice1,
        api2: apiSlice2,
        search: searchSlice
    }
})
export default Store