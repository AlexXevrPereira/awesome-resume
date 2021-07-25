import React, { FC } from 'react';
import { Grid, TextField } from '@material-ui/core';
import PersonalDetails from './PersonalDetails';
import ProfessionalSummary from './ProfessionalSummary';
import EmploymentHistory from './EmploymentHistory';
import Education from './Education';
import Links from './Links';
import Skills from './Skills';
import Languages from './Languages';
import References from './References';

const Resume: FC = () => {
  return (
    <Grid container padding={4}>
      <Grid item xs={12} lg={6}>
        <TextField label="Resume Title" />
        <PersonalDetails />
        <ProfessionalSummary />
        <EmploymentHistory />
        <Education />
        <Links />
        <Skills />
        <Languages />
        <References />
      </Grid>
    </Grid>
  );
};
export default Resume;
