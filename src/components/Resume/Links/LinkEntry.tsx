import React, { FC, useState } from 'react';
import { Box, Collapse, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

const LinkEntry: FC = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <Box border={1} borderRadius={1} padding={2}>
      <Typography variant={'body1'}>Link Label</Typography>
      <Typography variant={'caption'}>Link</Typography>
      <IconButton size={'small'} onClick={() => setCollapse(!collapse)}>
        {collapse ? <ExpandLess /> : <ExpandMore />}
      </IconButton>
      <Collapse in={collapse}>
        <Grid container>
          <Grid item xs={6}>
            <TextField label={'Link Label'} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label={'Link'} fullWidth />
          </Grid>
        </Grid>
      </Collapse>
    </Box>
  );
};
export default LinkEntry;
