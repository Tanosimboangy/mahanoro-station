import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {gettingData} from '../actions';
import Container from '../components/HomePage';
import car from '../../design/car.png';
import house from '../../design/house.png';

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
            <Container.List>
                {destinations.map(destination => (
                    <Container.Item  key={destination}>
                        <Link to={`/destination/${destination}`}>
                            <Container.Img src={house} alt="house_image"/> 
                            <Container.Text>{destination}</Container.Text>
                        </Link>
                    </Container.Item>
                ))}
            </Container.List>
        </Container>
    )
}

export default Home
