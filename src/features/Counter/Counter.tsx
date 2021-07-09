import React from 'react'
import classes from './Counter.module.css'

const Counter = () => {
    return (
        <div className={classes.container}>
            <div className={classes.counterBox}>
                <h2>Counter</h2>
                <div>
                    <button>-</button>
                    <span>Count</span>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
