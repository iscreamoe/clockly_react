import React from 'react';
// import { Link } from "react-router-dom";
import { Link, Switch,} from "react-router-dom";

import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import Friend from './Friend';
import Profile from './Profile';

const MyPage = () => {

  const friends = [
    { id: 1, image: "https://picsum.photos/id/237/150/150", name: "foobar", countryCity: "California", countryName: "United States", flag: "us flag" },
    { id: 2, image: "https://picsum.photos/id/666/150/150", name: "hoge", countryCity: "Kuala Lumpur", countryName: "Malaysia", flag: "my flag" },
    { id: 3, image: "https://picsum.photos/id/222/150/150", name: "fuga", countryCity: "Melbourne", countryName: "Australia", flag: "au flag" },
    { id: 4, image: "https://picsum.photos/id/555/150/150", name: "piyo", countryCity: "Paris", countryName: "France", flag: "fr flag" },
];

  return (
    <Wrapper>
        <Header>
          <Link to='/mypage'><Title>CLOCKLY</Title></Link>
          <Nav>
            <Link to='/profile'><NavList>user name</NavList></Link>
            <Link to='/profile'><NavList>user name</NavList></Link>
            <Link to='/'><NavList>logout</NavList></Link>
          </Nav>
        </Header>

        <MyPageTitle>- My Page -</MyPageTitle>

        <Container>
          <Grid relaxed columns={4}>
            {friends.map((friend, index) => {
              const { id, image, name, countryCity, countryName, flag } = friend;
              return (
                <Grid.Column key={index}>
                  <Friend 
                    id = {id}
                    image = {image}
                    name = {name}
                    countryCity = {countryCity}
                    countryName = {countryName}
                    flag = {flag}
                    />
                </Grid.Column>
              )
            })}
          </Grid>
        </Container>
      </Wrapper>
  );
}

const Wrapper = styled.div`
  background-size: cover;
  height: 100vh;
` 
const Header = styled.header`
  display: flex;
  justify-content: space-between;
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
const Container = styled.div`
  margin-top: 40px;
  text-align: center;
`
const MyPageTitle = styled.div`
  padding: 32px 0;
  font-size: 32px;
  text-align: center;
` 

export default MyPage;