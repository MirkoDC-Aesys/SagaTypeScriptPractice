import React from 'react'
import classes from './Counter.module.css'
import Button from '../../components/Button'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { decremented, incremented } from './counterSlice'

const Counter = () => {
    const count = useAppSelector(state => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div className={classes.container}>
            <div className={classes.counterBox}>
                <h2>Counter</h2>
                <div className={classes.countContainer}>
                    <Button onClick={() => dispatch(incremented())}>-</Button>
                    <span className={classes.count}>{count}</span>
                    <Button onClick={() => dispatch(decremented())}>+</Button>
                </div>
            </div>
        </div>
    )
}

export default Counter
