import React from 'react'
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import car from "../../design/car.png"
function HeaderPage() {
    return (
        <Header>
            <h2><Link to="/"><img src={car} alt="car"/> Mahanoro Station</Link></h2>
            <p><Link to="/myAccount">My account</Link></p>
        </Header>
    )
}
export default HeaderPage;