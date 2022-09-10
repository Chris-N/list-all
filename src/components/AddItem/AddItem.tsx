import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, TextField } from '@mui/material';
import data from 'data/food.json';
import { Item } from 'types';

import { Footer, Header, StyledAutoComplete } from './AddItem.style';

export const AddItem: React.FC<{
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}> = ({ items, setItems }) => {
  const newItem: Item = { name: '', category: 'Test', status: false };
  const navigate = useNavigate();

  return (
    <Container id='add-item'>
      <Header>
        Add Item
        <Button variant='text' color='primary' onClick={() => navigate('/')}>
          Close
        </Button>
      </Header>
      <StyledAutoComplete
        id='input-add-item'
        disableClearable
        freeSolo
        options={data.food.map((option) => option.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Add Item'
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            onBlur={(e) => {
              if (e.target.value !== '') {
                newItem.name = e.target.value;
              }
            }}
          />
        )}
      />
      <Footer>
        <Button
          variant='contained'
          onClick={() => {
            // TODO: Notify user with toast new item added, remove log
            console.log('Creating new item to list');
            items.push(newItem);
            setItems([...items]);
          }}
        >
          Create Item
        </Button>
      </Footer>
    </Container>
  );
};
