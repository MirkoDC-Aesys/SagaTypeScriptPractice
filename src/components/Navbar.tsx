import React from 'react'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.logo}>
                <a href="#">
                    <img src="https://cdn.icon-icons.com/icons2/2631/PNG/512/google_chrome_new_logo_icon_159144.png" alt="" />
                </a>
            </div>
            <div className={classes.content}>
                <a href="">Menù</a>
            </div>
            <div className={classes.socials}>
                <div>
                    <a href="">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
                <div>
                    <a href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div>
                    <a href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
