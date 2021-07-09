import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        decremented: (state) => {
            state.value += 1
        },
        incremented: (state) => {
            state.value -= 1
        }
    }
})

export const { decremented, incremented } = counterSlice.actions
export default counterSlice.reducer