import React from 'react';
import {
    Wrapper,
    Heading,
    List,
    Item,
    Img,
    Text
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
Container.Img = function ContainerImg({...restProps }) {
    return <Img {...restProps} />;
}
Container.Text = function ContainerText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}