import React from "react"
import { Link } from "gatsby"
import Footer from "./footer"
import Header from "./header/header"
import "../styles/base.scss"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
    return (
        <div className={layoutStyles.container}>
            <Header />
            <div className={layoutStyles.content}>
                <div className={layoutStyles.topLayer}></div>
                <main>
                    {props.children}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout
