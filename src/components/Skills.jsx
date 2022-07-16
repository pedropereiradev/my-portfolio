import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import { techIcons, learningTechIcons } from '../assets/techIcons';

function Skills() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
    >
      <Container>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          sx={{
            py: 3,
            color: 'info.main',
            fontSize: {
              xs: '3rem',
            },
          }}
        >
          Skills
        </Typography>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {techIcons.map((icon) => (
            <Grid item xs={4} align="center" key={icon.title}>
              <Box
                component="img"
                src={icon.img}
                alt={icon.title}
                sx={{
                  width: 52,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              />
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {icon.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Container>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          sx={{
            py: 3,
            color: 'info.main',
            fontSize: {
              xs: '3rem',
            },
          }}
        >
          Learning
        </Typography>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {learningTechIcons.map((icon) => (
            <Grid item xs={4} align="center" key={icon.title}>
              <Box
                component="img"
                src={icon.img}
                alt={icon.title}
                sx={{
                  width: 52,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              />
              <Typography variant="caption" sx={{ color: 'text.disabled' }}>
                {icon.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
}

export default Skills;
