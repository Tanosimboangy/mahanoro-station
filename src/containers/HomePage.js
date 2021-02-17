import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {gettingData} from '../actions';
import Container from '../components/HomePage';
import house from '../../design/house.png';

function Home() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data);
    const CarUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7NdbqIz7MkVy7G7CGjhfofoZZSDxyhvWAw&usqp=CAU";
    // Fetching the data and storing them in the data array
    useEffect(() => {
        dispatch(gettingData());
    }, [])

    // 
    const tripDestination = data.map(item => item.destination);
    const destinations = [...new Set(tripDestination)];

    return (
        <Container>
            <Container.Heading><img src={CarUrl} /> Where are you going?</Container.Heading>
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
