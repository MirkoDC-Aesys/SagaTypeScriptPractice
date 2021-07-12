import { all } from 'redux-saga/effects'
import catWatcher from './handlers/cat'
import dogWatcher from './handlers/dog'

export default function* rootSaga() {
    yield all([
        catWatcher(),
        dogWatcher()
    ])
}