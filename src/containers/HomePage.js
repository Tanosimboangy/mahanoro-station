import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {gettingData} from '../actions/index'

function Home() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.data);

    useEffect(() => {
        dispatch(gettingData());
    }, [])

    const tripsDestination = data.map(item => item.destination);
    const destinations = [...new Set(tripsDestination)];

    return (
        <div>
            <h2>Where are you going?</h2>
            <ul>
                {destinations.map(destination => (
                    <li key={destination}>
                        <Link to={`/destination/${destination}`}>
                            {destination}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
