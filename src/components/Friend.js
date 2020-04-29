import React from 'react';
import { Card, Icon} from 'semantic-ui-react';


const Friend = props => {
  const { friendName, friendCountry } = props;
    return (
      <Card>
        {/* <Image src={image} wrapped ui={false} /> */}
        <Card.Content>
          <Card.Header>
            <h1>{friendName}</h1>
            <p>{friendCountry}</p> &nbsp;&nbsp;
            {/* <i class={flag}></i></p> */}
          </Card.Header>
          <Card.Description>
            <Icon.Group size='large'>
            <Icon name='clock' /><span>a</span>
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
    );
}

export default Friend;