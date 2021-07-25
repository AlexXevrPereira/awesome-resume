import React, { FC } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import ReferenceEntry from './ReferenceEntry';

const References: FC = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Typography variant="h6">References</Typography>
        <Typography variant="caption">Level</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button fullWidth startIcon={<Add />}>
          Add Reference
        </Button>
      </Grid>
      <Grid item xs={12}>
        <ReferenceEntry />
      </Grid>
    </Grid>
  );
};

export default References;
