import React from 'react';
import  {
    BlockContainer,
    Wrapper,
    Frame,
    Image,
    Img,
    InfoHeading,
    SubTitle,
    SubText,
    Base,
    SubContainer,
    Info,
    Button,
} from './styles/BookingSeat';

export default function Container({children, ...restProps}) {
    return <BlockContainer {...restProps}>{children}</BlockContainer>
}
Container.Wrapper = function ContainerWrapper({children, ...restProps}) {
    return <Wrapper {...restProps}>{children}</Wrapper>
}
Container.Frame = function ContainerFrame({children, ...restProps}) {
    return <Frame {...restProps}>{children}</Frame>
}
Container.Img = function ContainerImg({...restProps}) {
    return <Img {...restProps}/>
}
Container.InfoHeading = function ContainerInfoHeading({children, ...restProps}) {
    return <InfoHeading {...restProps}>{children}</InfoHeading>
}
Container.SubTitle = function ContainerSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Container.SubText = function ContainerSubText({children, ...restProps}) {
    return <SubText {...restProps}>{children}</SubText>
}
Container.SubContainer = function ContainerSubContainer({children, ...restProps}) {
    return <SubContainer {...restProps}>{children}</SubContainer>
}
Container.Base = function ContainerBase({children, ...restProps}) {
    return <Base {...restProps}>{children}</Base>
}
Container.Image = function ContainerImage({children, ...restProps}) {
    return <Image {...restProps}>{children}</Image>
}
Container.Info = function ContainerInfo({children, ...restProps}) {
    return <Info {...restProps}>{children}</Info>
}
Container.Button = function ContainerButton({children, ...restProps}) {
    return <Button {...restProps}>{children}</Button>
}
