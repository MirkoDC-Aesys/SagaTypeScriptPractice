import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Button from '../../components/Button'
import classes from './Cat.module.css'
import { getCat } from './catSlice'

const Cat = () => {
    const { value, status } = useAppSelector(state => state.cat)
    const dispatch = useAppDispatch()

    return (
        <div className={classes.container}>
            <section>
                <Button onClick={() => dispatch(getCat())}>Get Cat</Button>
                <div className={classes.img}>
                    <img src={value} alt="" />
                </div>
                {
                    status === 'failed' ?
                        <div>Error</div>
                        :
                        <div></div>
                }
            </section>
        </div>
    )
}

export default Cat
