import React from 'react';
import {
    Wrapper,
    Heading,
} from './styles/HomePage';

export default function Container({children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
}
Container.Heading = function ContainerHeading({ children, ...restProps }) {
    return <Heading {...restProps}>{children}</Heading>;
};
Container.List = function ContainerList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
};
Container.Item = function ContainerItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};
