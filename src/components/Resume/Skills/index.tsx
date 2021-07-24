import React, { FC } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import SkillEntry from './SkillEntry';

const Skills: FC = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={8}>
        <Typography variant="h6">Skill</Typography>
        <Typography variant="caption">Level </Typography>
      </Grid>
      <Grid item xs={4}>
        <Button fullWidth startIcon={<Add />}>
          Add Skill
        </Button>
      </Grid>
      <Grid item xs={12}>
        <SkillEntry />
      </Grid>
    </Grid>
  );
};

export default Skills;
