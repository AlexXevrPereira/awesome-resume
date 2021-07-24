import React, { FC } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import Employment from './Employment';
import { Add } from '@material-ui/icons';

const EmploymentHistory: FC = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={6}>
        <Typography variant="h6">Employment History</Typography>
        <Typography variant="caption">Include your relevant job employment here.</Typography>
      </Grid>
      <Grid item xs={6} textAlign={'right'}>
        <Button startIcon={<Add />}>Add employment</Button>
      </Grid>
      <Grid item xs={12}>
        <Employment />
      </Grid>
    </Grid>
  );
};

export default EmploymentHistory;
