import { fork } from 'redux-saga/effects'
import catWatcher from './handlers/cat'

export default function* rootSaga() {
    yield [
        fork(catWatcher),
    ]
}