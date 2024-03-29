import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { frontendIcons, backendIcons } from '../assets/techIcons';

function Skills() {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      id="skills"
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
          Front-end
        </Typography>
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {frontendIcons.map((icon) => (
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
          Back-end
        </Typography>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {backendIcons.map((icon) => (
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
