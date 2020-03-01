import React from 'react';
import Friend from './Friend';
import { Header, Segment, Grid } from 'semantic-ui-react';
import { Dropdown, Menu } from 'semantic-ui-react';

const MyPage = props => {

  const friends = [
    { id: 1, name: "foobar" },
    { id: 2, name: "hoge" },
    { id: 3, name: "fuga" },
    { id: 4, name: "piyo" },
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
          const { id, name } = friend;
          return (
              <Grid.Column key={index}>
                <Friend 
                  id = {id}
                  name = {name}
                />
              </Grid.Column>
          )
        })}
      </Grid>
    </>
  )
}

export default MyPage;