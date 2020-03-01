import React from 'react';
import Friend from './Friend';
import { Header, Segment, Grid } from 'semantic-ui-react';

const MyPage = props => {
  const friends = [
    { id: 1, name: "foobar" },
    { id: 2, name: "hoge" },
    { id: 3, name: "fuga" },
    { id: 4, name: "piyo" },
];

  return (
    <>
      <Segment clearing>
        <Header as='h2' floated='right'>
          User Name
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