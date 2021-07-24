import React, { FC } from 'react';
import Resume from './components/Resume';
import { Box } from '@material-ui/core';

const App: FC = () => {
  return (
    <Box height="100vh">
      <Resume />
    </Box>
  );
};

export default App;
