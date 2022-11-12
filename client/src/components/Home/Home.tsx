import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, IconButton, ListSubheader } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Item } from 'types';
import { ListItem } from 'components/ListItem/ListItem';

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

    items[index].isComplete = !changeItem.isComplete;
    setItems([...items]);
  };

  const filterCategory = (): { name: string }[] => {
    const filteredData: { name: string }[] = [];
    sectionData.category.forEach((title) => {
      if (items.find((item) => item.category === title.name)) {
        filteredData.push(title);
      }
    });

    return filteredData;
  };

  const itemLister = (category: string) => {
    return items.map((value, index) => {
      if (value.isComplete) return null;

      if (value.category === category) {
        return (
          <ListItem
            key={`listitem-${index}`}
            value={value}
            index={index}
            handleToggle={handleToggle(index)}
          />
        );
      }

      return null;
    });
  };

  const itemCompleted = () => {
    return items.map((value, index) =>
      value.isComplete ? (
        <ListItem
          key={`listitem-${index}`}
          value={value}
          index={index}
          handleToggle={handleToggle(index)}
        />
      ) : null
    );
  };

  const displaySubheader = (subheader: string) =>
    items
      .filter((item) => item.category === subheader)
      .every((item) => item.isComplete) ? null : (
      <ListSubheader>{subheader}</ListSubheader>
    );

  const filteredCategory = filterCategory();

  console.log('ITEMS: ' + JSON.stringify(items));

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
          <div>
            {displaySubheader(subheader.name)}
            {itemLister(subheader.name)}
          </div>
        ))}
        {items.some((item) => item.isComplete) ? (
          <ListSubheader>{'Completed'}</ListSubheader>
        ) : null}
        {itemCompleted()}
      </MyList>
      <Footer>
        <Button variant='contained' onClick={() => navigate('/add')}>
          Add Item
        </Button>
      </Footer>
    </Container>
  );
};
