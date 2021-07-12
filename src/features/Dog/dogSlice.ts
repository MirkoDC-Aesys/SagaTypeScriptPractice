import { createSlice } from '@reduxjs/toolkit'

export interface CatState {
    value: string;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: CatState = {
    value: "https://jooinn.com/images/waiting-dog-1.jpg",
    status: 'idle',
}

const catSlice = createSlice({
    name: 'dog',
    initialState,
    reducers: {
        getDog: () => { },
        getDogPending: (state) => {
            state.value = "https://cdn.dribbble.com/users/1782673/screenshots/4683964/ezgif.com-video-to-gif__2_.gif"
            state.status = 'loading'
        },
        getDogFulfilled: (state, { payload }) => {
            state.value = payload
            state.status = 'idle'
        },
        getDogRejected: (state) => {
            state.value = "https://thumbs.dreamstime.com/b/dog-error-page-not-found-template-webpage-landing-illustrator-vector-188039604.jpg"
            state.status = 'failed'
        }
    }
})

export const { getDog, getDogFulfilled, getDogPending, getDogRejected } = catSlice.actions
export default catSlice.reducer