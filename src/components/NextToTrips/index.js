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
	Img,
	HeaderWrapper,
	HeaderTitle,
	HeaderText,
} from './styles/NextToTrips';

export default function Container({children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
}
Container.Heading = function ContainerHeading({children, ...restProps }) {
	return <Heading {...restProps}>{children}</Heading>;
}
Container.Img = function ContainerImg({children, ...restProps }) {
	return <Img {...restProps}>{children}</Img>;
}
Container.HeaderWrapper = function ContainerHeaderWrapper({children, ...restProps }) {
	return <HeaderWrapper {...restProps}>{children}</HeaderWrapper>;
}
Container.HeaderTitle = function ContainerHeaderTitle({children, ...restProps }) {
	return <HeaderTitle {...restProps}>{children}</HeaderTitle>;
}
Container.HeaderText = function ContainerHeaderText({children, ...restProps }) {
	return <HeaderText {...restProps}>{children}</HeaderText>;
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
