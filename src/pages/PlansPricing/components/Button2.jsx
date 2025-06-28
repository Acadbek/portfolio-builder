import * as React from 'react';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

export default function ButtonBase2() {
  return (
    <Stack direction="row">
      <Button>Upgrade now</Button>
    </Stack>
  );
}




const Button = styled(BaseButton) `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: black;
  border-radius: .75rem;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: 2px solid black;
  width: 190px;
  height: 56px;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem; 
  margin-top: 24px;
  `
;
