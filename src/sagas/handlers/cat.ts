import { put, call, takeLatest } from "redux-saga/effects"
import { getCatAPI } from "../../api/app"
import { getCat, getCatFulfilled, getCatPending, getCatRejected } from "../../features/Cat/catSlice"

export function* handleGetCat() {
    try {
        yield put(getCatPending())
        const cat: string = yield call(getCatAPI)
        yield put(getCatFulfilled(cat))
    } catch (error) {
        console.log(error)
        yield put(getCatRejected())
    }
}

export default function* catWatcher() {
    yield takeLatest(getCat, handleGetCat)
}