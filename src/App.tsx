import React, { FC } from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import { Box } from '@material-ui/core';

const App: FC = () => {
  return (
    <Box height="100vh">
      <Header />
      <Resume />
    </Box>
  );
};

export default App;
