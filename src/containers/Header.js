import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
function HeaderPage() {
    return (
        <Header>
            <h2><Link to="/">Mahanoro Station</Link></h2>
            <p><Link to="/myAccount">My account</Link></p>
        </Header>
    )
}
export default HeaderPage;