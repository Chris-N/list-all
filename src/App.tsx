import * as React from 'react';
import {
  Button,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';
import { Data } from 'data/items';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50%;
  border: 1px black solid;
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MyList = styled(List)``;

function App() {
  return (
    <Container id='app'>
      <Header>
        Stuff
        <IconButton edge='end' onClick={() => alert('TODO: settings')}>
          <MoreVertIcon />
        </IconButton>
      </Header>
      <MyList>
        {Data.map((value, index) => {
          return (
            <ListItemButton key={`listitem-${value.name}-${index}`}>
              <ListItemIcon>
                <Checkbox edge='start' disableRipple />
              </ListItemIcon>
              <ListItemText primary={value.name} secondary={value.category} />
            </ListItemButton>
          );
        })}
      </MyList>
      <Footer>
        <Button variant='contained' onClick={() => alert('TODO: Add item screen')}>
          Add Item
        </Button>
      </Footer>
    </Container>
  );
}

export default App;
