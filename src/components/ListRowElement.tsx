import React from 'react'
import classes from './ListRowElement.module.css'
import { Link } from 'react-router-dom'

interface Props {
    icon: object,
    title: string,
    location?: string
}

const ListRowElement: React.FC<Props> = ({ icon, title, location = '/' }) => {
    return (
        <Link to={location}>
            <div className={classes.container}>
                <div className={classes.icon}>
                    {icon}
                </div>
                <div className={classes.title}>
                    {title}
                </div>
            </div>
        </Link>
    )
}

export default ListRowElement
