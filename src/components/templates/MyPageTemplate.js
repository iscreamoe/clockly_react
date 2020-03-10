import React from 'react';
import { Link } from "react-router-dom";

import styled from 'styled-components';

export default ({ children }) => {
  return (
    <>
    <Header>
      <Link to='/mypage'><Title>CLOCKLY</Title></Link>
      <Nav>
        <Link to='/profile'><NavList>user name</NavList></Link>
        <Link to='/addfriend'><NavList>add friend</NavList></Link>
        <Link to='/'><NavList>logout</NavList></Link>
      </Nav>
    </Header>
    <main>{children}</main>
    </>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: pink;
  height: 100px;
`
const Title = styled.h1`
  font-size: 36px;
  padding-top: 24px;
  padding-left: 24px;
`
const Nav = styled.nav`
  display: flex;
  font-size: 1.25rem;
  text-transform: uppercase;
  margin-top: 34px;
  list-style: none;
`
const NavList = styled.li`
  margin-right: 34px;
  &:hover {
    color: rgb(197, 171, 172);
  };
`

