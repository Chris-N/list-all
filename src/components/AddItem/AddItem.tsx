import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Autocomplete, Button, Container, TextField } from '@mui/material';

import data from 'data/food.json';

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

const StyledAutoComplete = styled(Autocomplete)`
  margin: 10% 0;
`;

export const AddItem: React.FC = () => {
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
          />
        )}
      />
      <Footer>
        <Button
          variant='contained'
          onClick={() => alert('Creating new item to list')}
        >
          Create Item
        </Button>
      </Footer>
    </Container>
  );
};
