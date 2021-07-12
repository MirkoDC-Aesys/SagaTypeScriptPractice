import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import counterReducer from '../features/Counter/counterSlice'
import catWatcher from '../sagas/handlers/cat'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(catWatcher)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>