import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const Friend = props => {
  const { name } = props;

  return (
  <>
    <Card>
      <Image src='https://picsum.photos/id/237/150/150' wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          <h1>{name}</h1>
          <p>California/United States &nbsp;&nbsp;<i class="us flag"></i></p>
        </Card.Header>
        
        
        {/* <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta> */}
        <Card.Description>
          <Icon.Group size='large'>
            <Icon name='clock' /><span>12:34</span>
          </Icon.Group>
            <p>2020/03/01(Sun)</p>
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Icon.Group size='large'>
        <Icon name='twitter' />
        <Icon corner name='add' />
        </Icon.Group>
        Add on Twitter
      </Card.Content>
    </Card>
  </>
  )
}
export default Friend;