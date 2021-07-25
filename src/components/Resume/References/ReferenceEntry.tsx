import React, { FC, useState } from 'react';
import { Box, Collapse, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const ReferenceEntry: FC = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Box border={1} borderRadius={1} padding={2}>
      <Typography variant={'body1'}>Reference Name</Typography>
      <Typography variant={'caption'}>Company</Typography>
      <IconButton size={'small'} onClick={() => setCollapse(!collapse)}>
        {collapse ? <ExpandLess /> : <ExpandMore />}
      </IconButton>
      <Collapse in={collapse}>
        <Grid container>
          <Grid item xs={6}>
            <TextField label={'Full Name'} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label={'Company'} fullWidth />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={6}>
            <TextField label={'Phone'} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label={'Email'} fullWidth />
          </Grid>
        </Grid>
      </Collapse>
    </Box>
  );
};
export default ReferenceEntry;
