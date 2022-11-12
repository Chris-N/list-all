import styled from 'styled-components';
import { Autocomplete, Button, FormControl } from '@mui/material';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50%;
  border: 1px black solid;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAutoComplete = styled(Autocomplete)`
  margin: 10% 0;
`;

export const StyledFormControl = styled(FormControl)`
  margin: 10% 0;
`;

export const StyledButton = styled(Button)`
  margin: 10% 0;
`;
