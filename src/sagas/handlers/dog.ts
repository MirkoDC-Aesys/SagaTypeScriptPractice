import { put, call, takeLatest } from "redux-saga/effects"
import { getDogAPI } from "../../api/app"
import { getDog, getDogFulfilled, getDogPending, getDogRejected } from "../../features/Dog/dogSlice"

export function* handleGetDog() {
    try {
        yield put(getDogPending())
        const dog: string = yield call(getDogAPI)
        yield put(getDogFulfilled(dog))
    } catch (error) {
        console.log(error)
        yield put(getDogRejected())
    }
}

export default function* dogWatcher() {
    yield takeLatest(getDog, handleGetDog)
}