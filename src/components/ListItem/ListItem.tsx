import * as React from 'react';
import { Checkbox, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { DisplayItem } from 'types/index';

export const ListItem: React.FC<DisplayItem> = ({ value, index, handleToggle }) => (
  <ListItemButton key={`listitem-${value.name}-${index}`} onClick={handleToggle}>
    <ListItemIcon>
      <Checkbox edge='start' checked={value.status} disableRipple />
    </ListItemIcon>
    <ListItemText primary={value.name} secondary={value.category} />
  </ListItemButton>
);
