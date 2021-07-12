import { createSlice } from '@reduxjs/toolkit'

export interface CatState {
    value: string;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CatState = {
    value: '',
    status: 'idle',
}

const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        getCat: () => {},
        getCatPending: (state) => {
            state.value = "https://media1.tenor.com/images/8f7a28e62f8242b264c8a39ba8bea261/tenor.gif?itemid=15922897"
            state.status = 'loading'
        },
        getCatFulfilled: (state, {payload}) => {
            state.value = payload
            state.status = 'idle'
        },
        getCatRejected: (state) => {
            state.value = "https://i.ytimg.com/vi/KuLFXr7OPpc/hqdefault.jpg"
            state.status = 'failed'
        }
    }
})

export const { getCat, getCatFulfilled, getCatPending, getCatRejected } = catSlice.actions
export default catSlice.reducer