import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import counterReducer from '../features/Counter/counterSlice'
import catReducer from '../features/Cat/catSlice'
import dogReducer from '../features/Dog/dogSlice'
import rootSaga from '../sagas/rootSaga'


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cat: catReducer,
    dog: dogReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>