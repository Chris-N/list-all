import * as React from 'react';
import {
  Button,
  Checkbox,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import styled from 'styled-components';
import { Data } from './data/items';

const Header = styled.div`
  display: flex;
  justify-content: center;
  border: 1px black solid;
`;

const MyList = styled(List)``;

function App() {
  return (
    <Container id='app'>
      <Header>Stuff</Header>
      <MyList>
        {Data.map((value) => {
          return (
            <ListItemButton>
              <ListItemIcon>
                <Checkbox edge='start' disableRipple />
              </ListItemIcon>
              <ListItemText primary={value.name} secondary={value.category} />
            </ListItemButton>
          );
        })}
      </MyList>
      <Button variant='contained'>Add Item</Button>
    </Container>
  );
}

export default App;
