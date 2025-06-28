import * as React from 'react';
import { Button as BaseButton, buttonClasses } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

export default function ButtonBase() {
  return (
    <Stack direction="row">
      <Button>Get started</Button>
    </Stack>
  );
}

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Button = styled(BaseButton)(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: white;
  border-radius: .75rem;
  color: black;
  transition: all 150ms ease;
  cursor: pointer;
  border: 2px solid black;
  width: 190px;
  height: 56px;
  font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.75rem;
    margin-top: 24px;


  `,
);
