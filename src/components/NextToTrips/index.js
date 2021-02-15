import React from 'react';
import {
	Wrapper,
	Heading,
	Image,
	Base,
	Item,
	Day,
	Time,
	Date,
	Seats,
	Button,
} from './styles/NextToTrips';

export default function Container({children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
}
Container.Heading = function ContainerHeading({children, ...restProps }) {
	return <Heading {...restProps}>{children}</Heading>;
}
Container.Image = function ContainerImage({children, ...restProps }) {
	return <Image {...restProps}>{children}</Image>;
}
Container.Base = function ContainerBase({children, ...restProps }) {
	return <Base {...restProps}>{children}</Base>;
}
Container.Item = function ContainerItem({children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
}
Container.Day = function ContainerDay({children, ...restProps }) {
	return <Day {...restProps}>{children}</Day>;
}
Container.Time = function ContainerTime({children, ...restProps }) {
	return <Time {...restProps}>{children}</Time>;
}
Container.Date = function ContainerDate({children, ...restProps }) {
	return <Date {...restProps}>{children}</Date>;
}
Container.Seats = function ContainerSeats({children, ...restProps }) {
	return <Seats {...restProps}>{children}</Seats>;
}
Container.Button = function ContainerButton({children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
}
