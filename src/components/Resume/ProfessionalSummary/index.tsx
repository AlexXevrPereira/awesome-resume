import React, { FC } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';

const ProfessionalSummary: FC = () => {
  return (
    <Grid item xs={12}>
      <Typography variant="h6">Professional Summary</Typography>
      <TextField label="Short summary on your professional capabilities" fullWidth />
    </Grid>
  );
};

export default ProfessionalSummary;
