import styled, { css } from 'styled-components';
import {animated} from 'react-spring';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';

export const AnimatedBox = styled(animated.div)`
     min-height:inherit;
     max-width:100%;
     width:100%;
     position:absolute;
`;

export const SlideWrapper = styled.div.attrs((props) => ({
    currentColor: () => {
        switch (props.position) {
            case 1:
                return '#b1ccf0';
            case 2:
                return '#47ff78';
            case 3:
                return '#b38baf';
            default:
                return '#fff'
        }
    }
}))`
    width: 100%;
    min-height:inherit;
    display:flex;
    background:${props => props.currentColor};
    justify-content:center;
    align-items:center;
    border-radius: 4px;
`;

export const Links = styled(Link)`
    position:absolute;
    width:40px;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    ${props => props.prev ? css`
        left:0;
    ` : css`
        right:0;
    `} 
   
   &:hover{
    background:rgba(240, 240, 240, .5)
   }
   transition: background 400ms;
`;
export const Icons = styled(Icon)`
    opacity:0;
    color:rgba(233, 237, 242, .9);
    transition: opacity 400ms;
    ${Links}:hover & {
       opacity:1;
    }
`;
export const Title = styled.span`
    color:tomato;
    font-size:56px;
    font-weight:bold;
    text-transform:uppercase;
`;