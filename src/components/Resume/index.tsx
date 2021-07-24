import React, { FC } from 'react';
import { Grid, TextField } from '@material-ui/core';
import PersonalDetails from './PersonalDetails';

const Resume: FC = () => {
  return (
    <Grid container spacing={2} padding={4}>
      <Grid item xs={12}>
        <TextField label="Resume Title" />
      </Grid>
      <Grid item xs={12}>
        <PersonalDetails />
      </Grid>
    </Grid>
  );
};
export default Resume;
