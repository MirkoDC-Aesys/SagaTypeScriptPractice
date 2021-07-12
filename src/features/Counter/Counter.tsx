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
            <section>
                <h2>Counter</h2>
                <div className={classes.countContainer}>
                    <Button onClick={() => dispatch(incremented())}>-</Button>
                    <span className={classes.count}>{count}</span>
                    <Button onClick={() => dispatch(decremented())}>+</Button>
                </div>
            </section>
        </div>
    )
}

export default Counter
