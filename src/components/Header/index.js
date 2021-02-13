import React from 'react';
import {
    Wrapper,
} from './styles/Header';

export default function Header({children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
}
