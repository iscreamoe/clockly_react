import React from 'react';
import { Link } from "react-router-dom";
import { Header, Icon, Button } from 'semantic-ui-react';

const TopPage = () => (
  <>
      <Header as='h2' icon textAlign='center' className="top_header">
        <Icon name='clock outline' circular />
          <Header.Content>CLOCKLY</Header.Content>
      </Header>

      <Button >Sign up</Button>
      <Button><Link to='/MyPage'>Log in</Link></Button>
    
  </>
)

export default TopPage;