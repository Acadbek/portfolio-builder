import * as React from 'react';
import { positions, styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

export default function UnstyledTabsIntroduction() {
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>Yearly</Tab>
        <Tab value={1}>Monthly</Tab>
      </TabsList>
      <TabPanel value={0}>My account page</TabPanel>
      <TabPanel value={1}>Profile page</TabPanel>
    </Tabs>
  );
}


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

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  cursor: pointer;
  font-size: 0.875rem;
  width: 10rem; 
  height: 2.5rem; 
  font-weight: 600;
  background-color: transparent;
  border-radius: 30%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${grey[500]};
  
  &:focus {
    color: #fff;
  }

  &.${tabClasses.selected} {
    background-color: black;
    color: #fff;
  }

`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 1170px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  border-radius: 12px;
  opacity: 0.6;
  `,
);

const TabsList = styled(BaseTabsList)`
  width: 360px;
  height: 72px;
  background-color: #fff;
  border-radius: 12px;
  margin-bottom: 48px;
  margin-top: 28px;
  z-index: 2;
  margin-left: 500px;
  border-radius: 20%;
  display: flex;
  align-items: center;
  place-content: space-between center;
  border: 1px solid gray;
  `;
