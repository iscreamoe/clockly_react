import React, { useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


const Friend = props => {
  const { image, name, countryCity, countryName, flag } = props;
    return (
      <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            <h1>{name}</h1>
            <p>{countryCity}/{countryName} &nbsp;&nbsp;<i class={flag}></i></p>
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