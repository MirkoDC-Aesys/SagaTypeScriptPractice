import React from 'react'
import classes from './Counter.module.css'
import Button from '../../components/Button'

const Counter = () => {
    return (
        <div className={classes.container}>
            <div className={classes.counterBox}>
                <h2>Counter</h2>
                <div>
                    <Button onClick={() => alert('ciao')}>-</Button>
                    <span>Count</span>
                    <button>+</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
