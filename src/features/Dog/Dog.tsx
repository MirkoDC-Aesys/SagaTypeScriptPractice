import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Button from '../../components/Button'
import classes from './Dog.module.css'
import { getDog } from './dogSlice'

const Dog = () => {
    const { value, status } = useAppSelector(state => state.dog)
    const dispatch = useAppDispatch()

    return (
        <div className={classes.container}>
            <div className={classes.counterBox}>
                <Button onClick={() => dispatch(getDog())}>Get Dog</Button>
                <div className={classes.img}>
                    <img src={value} alt="" />
                </div>
                {
                    status === 'failed' ?
                        <div>Error</div>
                        :
                        <div></div>
                }
            </div>
        </div>
    )
}

export default Dog
