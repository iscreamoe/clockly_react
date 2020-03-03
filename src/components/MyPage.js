import React from 'react';
import Friend from './Friend';
import { Header, Segment, Grid } from 'semantic-ui-react';
import { Dropdown, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

const MyPage = () => {

  const friends = [
    { id: 1, image: "https://picsum.photos/id/237/150/150", name: "foobar", countryCity: "California", countryName: "United States", flag: "us flag" },
    { id: 2, image: "https://picsum.photos/id/666/150/150", name: "hoge", countryCity: "Kuala Lumpur", countryName: "Malaysia", flag: "my flag" },
    { id: 3, image: "https://picsum.photos/id/222/150/150", name: "fuga", countryCity: "Melbourne", countryName: "Australia", flag: "au flag" },
    { id: 4, image: "https://picsum.photos/id/555/150/150", name: "piyo", countryCity: "Paris", countryName: "France", flag: "fr flag" },
];

//  doropdown link
const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
];

  return (
    <>
      <Wrapper>
        <Segment clearing>
          <Header as='h2' floated='right'>
          User Name
            <Menu compact>
              <Dropdown text='Dropdown' options={options} simple item />
            </Menu>
          </Header>
          <Header as='h2' floated='left'>
            CLOCKLY
          </Header>
        </Segment>

        <MyPageTitle>★- My Page -★</MyPageTitle>

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
    </>
  );
}

const Wrapper = styled.div`
  background-size: cover;
  height: 100vh;
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