import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
    width:100vw;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#222426;
    padding: 15px 0;
`;

const Links = styled(NavLink)`
    text-decoration:none;
    color:#fff;
    font-size:16px;
    font-weight:bold;
    padding-right:20px;

    &:hover{
        color:#78deb5;
    }
`;

const NavBar = () => (
    <>
        <Navigation>
            <Links to="/slider">Slider</Links>
            <Links to="/animabox">AnimaBox</Links>
        </Navigation>
    </>
);

export default NavBar;