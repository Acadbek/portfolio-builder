import * as React from 'react';
import {  styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import { FileIcon } from '../../../assets/icon/File';
import { FileIcon2 } from '../../../assets/icon/FileIcon2';
import { CheckIcon } from '../../../assets/icon/CheckIcon';
import { AiIcon } from '../../../assets/icon/AiIcon';
import { Check } from '../../../assets/icon/Check';
import { CheckMark } from '../../../assets/icon/CheckMark';
import SimplePopper from './Popper';
import { LockIcon } from '../../../assets/icon/LockIcon';
import ButtonBase from './Button';
import ButtonBase2 from './Button2';
import './index.css';



export default function UnstyledTabsIntroduction() {
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>Yearly</Tab>
        <Tab value={1}>Monthly</Tab>
      </TabsList>
      <TabPanel value={0}>
        <section className='sections'>
          <div></div>
          <div>
            <p className='table-title'>Free</p>
            <div className='columnTable'>
              <FileIcon />
              <FileIcon2 />
            </div>
          </div>
          <div>
            <p className='table-title'>Basic</p>
            <div className='columnTable'>
              <FileIcon />
              <FileIcon2 />
              <CheckIcon />
            </div>
          </div>
          <div>
          <p className='table-title'>Pro +</p>
            <div className='columnTable'>
              <FileIcon />
              <FileIcon2 />
              <CheckIcon />
              <AiIcon />
            </div>
          </div>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections2'>
          <p>Resume</p>
          <p>🎁 1 free</p>
          <p>3</p>
          <p>Unlimited</p>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections2'>
          <p>Cover Letter</p>
          <p>🎁 1 free</p>
          <p>20</p>
          <p>Unlimited</p>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections3'>
          <p>Online Resume</p>
          <p className='checkMark-Popper'><CheckMark /> <SimplePopper /></p>
          <p><Check /></p>
          <p><Check /></p>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections2'>
          <p>Job Tracker</p>
          <p><LockIcon /></p>
          <p><Check /></p>
          <p><Check /></p>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections2'>
          <p>Priority Support</p>
          <p><LockIcon /></p>
          <p><Check /></p>
          <p><Check /></p>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections2'>
          <p>🤖 AI Features</p>
          <p><LockIcon /></p>
          <p><LockIcon /></p>
          <p><Check /></p>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections2'>
          <div></div>
          <div className='Price'>
            <h3>$0</h3>
            <p>free, as in free</p>
            <ButtonBase />
          </div>
          <div className='Price'>
            <div>
            <h3>$3</h3>
            <h4>/month</h4>
            </div>
            <p>* $36.00 billed yearly</p>
            <ButtonBase2 />
          </div>
          <div className='Price'>
            <div>
            <h3>$5</h3>
            <h4>/month</h4>
            </div>
            <p>* $60.00 billed yearly</p>
            <ButtonBase2 />
          </div>
        </section>
      </TabPanel>
      <TabPanel value={1}>
      <section className='sections'>
          <div></div>
          <div>
            <p className='table-title'>Free</p>
            <div className='columnTable'>
              <FileIcon />
              <FileIcon2 />
            </div>
          </div>
          <div>
            <p className='table-title'>Basic</p>
            <div className='columnTable'>
              <FileIcon />
              <FileIcon2 />
              <CheckIcon />
            </div>
          </div>
          <div>
          <p className='table-title'>Pro +</p>
            <div className='columnTable'>
              <FileIcon />
              <FileIcon2 />
              <CheckIcon />
              <AiIcon />
            </div>
          </div>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections2'>
          <p>Resume</p>
          <p>🎁 1 free</p>
          <p>3</p>
          <p>Unlimited</p>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections2'>
          <p>Cover Letter</p>
          <p>🎁 1 free</p>
          <p>20</p>
          <p>Unlimited</p>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections3'>
          <p>Online Resume</p>
          <p className='checkMark-Popper'><CheckMark /> <SimplePopper /></p>
          <p><Check /></p>
          <p><Check /></p>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections2'>
          <p>Job Tracker</p>
          <p><LockIcon /></p>
          <p><Check /></p>
          <p><Check /></p>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections2'>
          <p>Priority Support</p>
          <p><LockIcon /></p>
          <p><Check /></p>
          <p><Check /></p>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections2'>
          <p>🤖 AI Features</p>
          <p><LockIcon /></p>
          <p><LockIcon /></p>
          <p><Check /></p>
        </section>
        <div className='horizontal-line'></div>
        <section className='sections2'>
          <div></div>
          <div className='Price'>
            <h3>$0</h3>
            <p>free, as in free</p>
            <ButtonBase />
          </div>
          <div className='Price'>
            <div>
            <h3>$11</h3>
            <h4>/month</h4>
            </div>
            <p>Save 73% with yearly billing</p>
            <ButtonBase2 />
          </div>
          <div className='Price'>
            <div>
            <h3>$19</h3>
            <h4>/month</h4>
            </div>
            <p>Save 74% with yearly billing</p>
            <ButtonBase2 />
          </div>
        </section>
      </TabPanel>
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
  border-radius: 30px;
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

const TabPanel = styled(BaseTabPanel) `
  width: 1170px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  background-color: white;
  border-radius: 12px;
  padding-left: 72px;
  padding-right: 72px;
  padding-top: 48px;
  padding-bottom: 80px;
  opacity: 0.6;
  `
;

const TabsList = styled(BaseTabsList)`
  width: 360px;
  height: 72px;
  background-color: #fff;
  border-radius: 12px;
  margin-bottom: 48px;
  margin-top: 28px;
  margin-left: 500px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  place-content: space-between center;
  `;
