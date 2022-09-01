import { Button, Container } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50%;
  border: 1px black solid;
`;

export const AddItem: React.FC = () => {
  return (
    <Container id='add-item'>
      <Header>
        Add Item
        <Button
          variant='text'
          color='primary'
          onClick={() => alert('TODO: discard changes return home')}
        >
          Close
        </Button>
      </Header>
    </Container>
  );
};
