import React from 'react';
import Friend from './Friend';
import { Header, Segment, Grid } from 'semantic-ui-react';
import { Dropdown, Menu } from 'semantic-ui-react';

const MyPage = props => {

  const friends = [
    { id: 1, image: "https://picsum.photos/id/237/150/150", name: "foobar", countryCity: "California", countryName: "United States", flag: "us flag" },
    { id: 2, image: "https://picsum.photos/id/666/150/150", name: "hoge", countryCity: "Kuala Lumpur", countryName: "Malaysia", flag: "my flag" },
    { id: 3, image: "https://picsum.photos/id/222/150/150", name: "fuga", countryCity: "Melbourne", countryName: "Australia", flag: "au flag" },
    { id: 4, image: "https://picsum.photos/id/555/150/150", name: "piyo", countryCity: "Paris", countryName: "France", flag: "fr flag" },
];

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
];

  return (
    <>
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

      <h3>My Page</h3>

      {/* Friend コンポーネントの呼び出し& props の受け渡し */}
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
    </>
  )
}

export default MyPage;