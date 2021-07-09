import React from 'react'
import classes from './ListRowElement.module.css'

interface Props {
    icon: object,
    title: string
}

const ListRowElement: React.FC<Props> = ({ icon, title }) => {
    return (
        <a href="">
            <div className={classes.container}>
                <div className={classes.icon}>
                    {icon}
                </div>
                <div className={classes.title}>
                    {title}
                </div>
            </div>
        </a>
    )
}

export default ListRowElement
