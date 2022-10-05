import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from '@mui/material';
import data from 'data/food.json';
import categoryData from 'data/category.json';
import { Item } from 'types';

import {
  Footer,
  Header,
  StyledAutoComplete,
  StyledButton,
  StyledFormControl,
} from './AddItem.style';

export const AddItem: React.FC<{
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}> = ({ items, setItems }) => {
  const [open, setOpen] = React.useState(false);

  const newItem: Item = { name: '', category: 'Test', status: false };
  const navigate = useNavigate();

  const onCreateItem = () => {
    setOpen(true);
    items.push(newItem);
    setItems([...items]);
  };

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
      <StyledFormControl fullWidth>
        <InputLabel id='category-label'>Category</InputLabel>
        <Select
          labelId='category-label'
          id='category-select'
          label='Category'
          value={categoryData.category[0].name}
          onChange={() => alert('Change value')}
        >
          <MenuItem>Menu1</MenuItem>
          <MenuItem>Menu2</MenuItem>
        </Select>
      </StyledFormControl>
      <Footer>
        <StyledButton variant='contained' onClick={onCreateItem}>
          Create Item
        </StyledButton>
      </Footer>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity='success'>New item added</Alert>
      </Snackbar>
    </Container>
  );
};
