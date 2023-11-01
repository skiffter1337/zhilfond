import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: InitialStateType = {
    isLoading: false
}
type InitialStateType = {
    isLoading: boolean
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<{isLoading: boolean}>) => {
            state.isLoading = action.payload.isLoading
        }
    }
})

export const appSlice = slice.reducer;

export const appActions = slice.actions