import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Friend = props => {
  const { id, name } = props;

  return (
  <>
    <Card>
      <Image src='https://picsum.photos/id/237/150/150' wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          <h1>{name}</h1>
          <p>{id}</p>
        </Card.Header>
        
        
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
        </Card.Description>
        </Card.Content>

      <Card.Content extra>
        <p>
          <Icon name='user' />
          22 Friends
        </p>
      </Card.Content>
    </Card>
  </>
  )
}
export default Friend;