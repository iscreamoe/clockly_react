import React from 'react';
import { Header, Icon } from 'semantic-ui-react'

const TopPage = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='clock outline' circular />
      <Header.Content>CLOCKLY</Header.Content>
    </Header>
    
  </div>
)



export default TopPage;