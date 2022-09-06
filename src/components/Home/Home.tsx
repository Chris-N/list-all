import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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

import importedItems from 'data/items.json';

import { Item } from 'types';

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

export const Home: React.FC = () => {
  const [items, setItems] = React.useState<Item[]>(importedItems.data);
  const navigate = useNavigate();

  const handleToggle = (index: number) => () => {
    const changeItem: Item | undefined = items.at(index);

    if (!changeItem) return;

    items[index].status = !changeItem.status;
    setItems([...items]);
  };

  return (
    <Container id='app'>
      <Header>
        Stuff
        <IconButton edge='end' onClick={() => alert('TODO: settings')}>
          <MoreVertIcon />
        </IconButton>
      </Header>
      <MyList>
        {items.map((value, index) => {
          return (
            <ListItemButton
              key={`listitem-${value.name}-${index}`}
              onClick={handleToggle(index)}
            >
              <ListItemIcon>
                <Checkbox edge='start' checked={value.status} disableRipple />
              </ListItemIcon>
              <ListItemText primary={value.name} secondary={value.category} />
            </ListItemButton>
          );
        })}
      </MyList>
      <Footer>
        <Button variant='contained' onClick={() => navigate('/add')}>
          Add Item
        </Button>
      </Footer>
    </Container>
  );
};
