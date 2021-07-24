import React, { FC, useState } from 'react';
import { Box, Collapse, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const Employment: FC = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Box border={1} borderRadius={1} padding={2}>
      <Typography variant={'subtitle1'}>Job Title</Typography>
      <Typography variant={'caption'}>Date from and to</Typography>
      <IconButton onClick={() => setCollapse(!collapse)}>{collapse ? <ExpandLess /> : <ExpandMore />}</IconButton>
      <Collapse in={collapse}>
        <Grid container>
          <Grid item xs={6}>
            <TextField label={'Job Title'} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label={'Employer'} fullWidth />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <TextField label={'Start & End Date'} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label={'City'} fullWidth />
          </Grid>
        </Grid>
        <TextField label={'Description'} fullWidth />
      </Collapse>
    </Box>
  );
};

export default Employment;
