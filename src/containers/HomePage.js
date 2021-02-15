import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {gettingData} from '../actions/index';
import Container from '../components/HomePage';
import car from '../../design/car.png';

function Home() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data);

    useEffect(() => {
        dispatch(gettingData());
    }, [])

    const tripsDestination = data.map(item => item.destination);
    const destinations = [...new Set(tripsDestination)];

    return (
        <Container>
            <Container.Heading>Where are you going?</Container.Heading>
            <ul>
                {destinations.map(destination => (
                    <li key={destination}>
                        <Link to={`/destination/${destination}`}>
                            {destination}
                        </Link>
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default Home
