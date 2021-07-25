import React, { FC } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import LanguageEntry from './LanguageEntry';

const Languages: FC = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Typography variant="h6">Languages</Typography>
        <Typography variant="caption">Level</Typography>
      </Grid>
      <Grid item xs={4}>
        <Button fullWidth startIcon={<Add />}>
          Add Language
        </Button>
      </Grid>
      <Grid item xs={12}>
        <LanguageEntry />
      </Grid>
    </Grid>
  );
};

export default Languages;
