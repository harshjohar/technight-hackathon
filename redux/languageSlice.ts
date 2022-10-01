import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface Language {
    value: String
}

const initialState:Language = {
    value: "en" // "en" or "hi"
}

export const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        toggle: (state) => {
            if(state.value=='en') {
                state.value='hi';
            }
            else {
                state.value='en';
            }
        }
    }
})

export const {toggle}=languageSlice.actions

export const languageSelect = (state: RootState) => state.language.value

export default languageSlice.reducer;