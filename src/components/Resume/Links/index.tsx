import React, { FC } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import LinkEntry from './LinkEntry';

const Links: FC = () => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Typography variant="h6">Links</Typography>
        <Typography variant="caption">
          Include any websites or links you want hiring managers to see. E.g: LinkedIn, blogs, ...{' '}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Button fullWidth startIcon={<Add />}>
          Add Link
        </Button>
      </Grid>
      <Grid item xs={12}>
        <LinkEntry />
      </Grid>
    </Grid>
  );
};

export default Links;
