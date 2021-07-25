import React, { FC } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import EmploymentEntry from './EmploymentEntry';
import { Add } from '@material-ui/icons';

const EmploymentHistory: FC = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Typography variant="h6">Employment History</Typography>
        <Typography variant="caption">Include your relevant job employment here.</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button fullWidth startIcon={<Add />}>
          Add employment
        </Button>
      </Grid>
      <Grid item xs={12}>
        <EmploymentEntry />
      </Grid>
    </Grid>
  );
};

export default EmploymentHistory;
