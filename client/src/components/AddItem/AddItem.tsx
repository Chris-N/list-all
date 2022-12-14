import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  Button,
  Container,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
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
  const [openError, setOpenError] = React.useState(false);
  const [itemName, setItemName] = React.useState('');
  const [category, setCategory] = React.useState('Test');

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const newItem: Item = { name: '', category: 'Test', isComplete: false };
  const navigate = useNavigate();

  const onCreateItem = () => {
    if (itemName === '') {
      setOpenError(true);
      return;
    }

    setOpen(true);
    newItem.name = itemName;
    newItem.category = category;
    items.push(newItem);
    setItems([...items]);

    // Will add new item to a master list item
    // Then give user exact match in input preview to select from
    data.food.push(newItem);
    setItemName('');
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleCloseError = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
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
        value={itemName}
        id='input-add-item'
        onInputChange={(event, value) => {
          setItemName(value as string);
        }}
        onChange={(event, value) => {
          setItemName(value as string);
        }}
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
          value={category}
          onChange={handleCategoryChange}
        >
          {categoryData.category.map((menuItem) => (
            <MenuItem key={menuItem.name} value={menuItem.name}>
              {menuItem.name}
            </MenuItem>
          ))}
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
      <Snackbar
        open={openError}
        autoHideDuration={3000}
        onClose={handleCloseError}
      >
        <Alert severity='error'>Item name missing</Alert>
      </Snackbar>
    </Container>
  );
};
