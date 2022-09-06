import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Container } from '@mui/material';

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
