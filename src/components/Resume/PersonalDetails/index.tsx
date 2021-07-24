import React, { FC, useState } from 'react';
import { Button, Collapse, Grid, TextField, Typography } from '@material-ui/core';

const PersonalDetails: FC = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <Grid item xs={12} paddingLeft={0}>
        <Typography variant="h6">Personal Details</Typography>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>
          <TextField label="Job Title" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="photo" fullWidth />
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>
          <TextField label="First Name" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Last Name" fullWidth />
        </Grid>
      </Grid>
      <Grid container xs={12}>
        <Grid item xs={6}>
          <TextField label="Email" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Phone" fullWidth />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button onClick={() => setCollapse(!collapse)}>{collapse ? 'Hide more details' : 'Show more details'}</Button>
      </Grid>
      <Collapse in={collapse}>
        <Grid container xs={12}>
          <Grid item xs={6}>
            <TextField label="Country" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="City" fullWidth />
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={6}>
            <TextField label="Address" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Postal Code" fullWidth />
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={6}>
            <TextField label="Driving License" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Nationality" fullWidth />
          </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid item xs={6}>
            <TextField label="Place Of Birth" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Date Of Birth" fullWidth />
          </Grid>
        </Grid>
      </Collapse>
    </>
  );
};

export default PersonalDetails;
