import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Checkbox,
  Container,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Item } from 'types';

import sectionData from 'data/category.json';
import { Footer, Header, MyList } from './Home.style';

export const Home: React.FC<{
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}> = ({ items, setItems }) => {
  const navigate = useNavigate();

  const handleToggle = (index: number) => () => {
    const changeItem: Item | undefined = items.at(index);

    if (!changeItem) return;

    items[index].status = !changeItem.status;
    setItems([...items]);
  };

  const filterCategory = (): { name: string }[] => {
    const temp: { name: string }[] = [];
    sectionData.category.forEach((title) => {
      if (items.find((item) => item.category === title.name)) {
        temp.push(title);
      }
    });

    return temp;
  };

  const filteredCategory = filterCategory();

  return (
    <Container id='app'>
      <Header>
        Stuff
        <IconButton edge='end' onClick={() => alert('TODO: settings')}>
          <MoreVertIcon />
        </IconButton>
      </Header>
      <MyList>
        {filteredCategory.map((subheader) => (
          <li key={`category-${subheader.name}`}>
            <ul>
              <ListSubheader>{subheader.name}</ListSubheader>
              {items.map((value, index) =>
                value.category !== subheader.name ? null : (
                  <ListItemButton
                    key={`listitem-${value.name}-${index}`}
                    onClick={handleToggle(index)}
                  >
                    <ListItemIcon>
                      <Checkbox edge='start' checked={value.status} disableRipple />
                    </ListItemIcon>
                    <ListItemText primary={value.name} secondary={value.category} />
                  </ListItemButton>
                )
              )}
            </ul>
          </li>
        ))}
      </MyList>
      <Footer>
        <Button variant='contained' onClick={() => navigate('/add')}>
          Add Item
        </Button>
      </Footer>
    </Container>
  );
};
