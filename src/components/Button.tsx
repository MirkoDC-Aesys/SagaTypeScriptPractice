import React from 'react'
import classes from './Button.module.css'

interface Props {
    onClick: () => void
}

const Button: React.FC<Props> = ({ onClick, children }) => {
    return (
        <button className={`${classes.btn} ${classes.btn_13}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
