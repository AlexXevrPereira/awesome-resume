import React, { FC } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import EducationEntry from './EducationEntry';

const Education: FC = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Typography variant="h6">Education</Typography>
        <Typography variant="caption">Include your relevant educational achievements here.</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button fullWidth startIcon={<Add />}>
          Add education
        </Button>
      </Grid>
      <Grid item xs={12}>
        <EducationEntry />
      </Grid>
    </Grid>
  );
};

export default Education;
