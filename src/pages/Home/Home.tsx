import React from 'react'
import { useAppSelector } from '../../app/hooks'
import classes from './Home.module.css'

const Home = () => {
    const { counter, cat, dog } = useAppSelector(state => state)

    return (
        <div className={classes.container}>
            <section>
                <h2>Curren count</h2>
                <div className={classes.count}>{counter.value}</div>
            </section>
            <section>
                <h2>Current Cat</h2>
                <div className={classes.img}>
                    <img src={cat.value} alt="" />
                </div>
            </section>
            <section>
                <h2>Current Dog</h2>
                <div className={classes.img}>
                    <img src={dog.value} alt="" />
                </div>
            </section>
        </div>
    )
}

export default Home
