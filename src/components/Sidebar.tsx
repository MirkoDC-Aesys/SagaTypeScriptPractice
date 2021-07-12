import React from 'react'
import classes from './Sidebar.module.css'
import ListRowElement from './ListRowElement'

const Sidebar = () => {
    return (
        <div className={classes.container}>
            <ListRowElement icon={<i className="fas fa-home"></i>} title="Home" />
            <ListRowElement icon={<i className="fas fa-calculator"></i>} title="Counter" location='/Counter' />
            <ListRowElement icon={<i className="fas fa-cat"></i>} title="Cat" location='/Cat' />
            <ListRowElement icon={<i className="fas fa-dog"></i>} title="Dog" location='/Dog' />
        </div>
    )
}

export default Sidebar
